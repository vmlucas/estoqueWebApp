import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Consolidado } from '../consolidado';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EstoqueEngineService } from '../estoque-engine.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-consolidado-tipos',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,NgChartsModule],
  templateUrl: './consolidado-tipos.component.html',
  styleUrl: './consolidado-tipos.component.css'
})
export class ConsolidadoTiposComponent implements OnInit{
 
  consolidados: Consolidado[]=[];
  consolidadosCompleto: Consolidado[]=[];
  consolidadoAtual:Consolidado | undefined ;
  // options array
  productNames: string[] = [];
  tipos:string[] = [];
  tipo:string='';
  currentIndex = -1;
  name:string='';
  start:string='';
  end:string='';
  valorTotal = 0.0;

  //chart
  dChartLabels: any;            
  dChartType: ChartType = 'line';
  dChartData:any;

  constructor(private engine:EstoqueEngineService, private http: HttpClient) {
    
  }

  ngOnInit() {
    this.engine.findTipoNames().subscribe({
      next: (data) => {
        this.tipos = data;
      },
      error: (e) => console.error(e)
    });
  }

  onChange(event:any) {
    this.tipo = event.target.value;
    this.engine.consolidadoTipoValorAno(this.tipo).subscribe({
      next: (data) => {
        this.consolidadosCompleto = data;
        this.consolidados = this.consolidadosCompleto.slice(this.consolidadosCompleto.length-10,this.consolidadosCompleto.length);
        this.consolidadoAtual = this.consolidadosCompleto[this.consolidadosCompleto.length - 1];   
        this.dChartLabels = this.consolidadosCompleto.map(function(item) {
          return item['data'].split("T")[0];
        });//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
        this.dChartData = {
          labels: this.dChartLabels,
          datasets: [{
            label: 'Total do Estoque de '+this.tipo,
            data: this.consolidadosCompleto.map(function(item) {
              return item['valorTotal'];
          }),
            borderWidth: 1
          }]
        };
      },
      error: (e) => console.error(e)
    });
   
  }

  chartClicked(event:any){
       console.log("Chart event");
  }
}

