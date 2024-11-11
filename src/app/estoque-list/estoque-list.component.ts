import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto.model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EstoqueEngineService } from '../estoque-engine.service';
import { Observable } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';


@Component({
  selector: 'app-estoque-list',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, SpinnerComponent
  ],
  templateUrl: './estoque-list.component.html',
  styleUrl: './estoque-list.component.css'
})
export class EstoqueListComponent implements OnInit{
 
  produtos: Produto[]=[];
  // options array
  productNames: string[] = [];
  tipos:string[] = [];
  currentIndex = -1;
  tipoSelect:string='';
  name:string='';
  start:string='';
  end:string='';
  isLoading=false;

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
    this.tipoSelect = event.target.value;
    this.engine.findMedsNames(this.tipoSelect).subscribe({
      next: (data) => {
        this.productNames = data;
      },
      error: (e) => console.error(e)
    });
  }

  
  buscarProdutos(){    
    this.produtos = [];
    this.isLoading=true;
    /*setTimeout(()=>{
      this.isLoading=false;
    },5000);*/
    this.engine.findMedsDate(this.name,this.start,this.end).subscribe({
        next: (data) => {
          console.log(data);
          this.produtos = data;
          this.isLoading = false;
        },
        error: (e) => console.error(e)
      });
    
  }

}

