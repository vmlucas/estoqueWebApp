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
  selector: 'app-consolidado-tables',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,NgChartsModule],
  templateUrl: './consolidado-tables.component.html',
  styleUrl: './consolidado-tables.component.css'
})
export class ConsolidadoTablesComponent implements OnInit{
 
  consolidados: Consolidado[]=[];
  consolidadosCompleto: Consolidado[]=[];
  consolidadoAtual:Consolidado | undefined ;
  // options array
  anos: number[] = [2023,2024]
  ano:number=2024
  currentIndex = -1;
  

  //chart
  dChartLabels: any;            
  dChartType: ChartType = 'line';
  dChartData:any;

  constructor(private engine:EstoqueEngineService, private http: HttpClient) {
    
  } 

  ngOnInit() {
    console.log("entrou constructor");
    this.engine.consolidadoValor().subscribe({
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
            label: 'Total do Estoque',
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

  onChange(event:any) {
    this.ano = event.target.value;
    this.engine.consolidadoValorAno(this.ano).subscribe({
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
            label: 'Total do Estoque',
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

