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
  selector: 'app-ceaf',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, SpinnerComponent],
  templateUrl: './ceaf.component.html',
  styleUrl: './ceaf.component.css'
})
export class CEAFComponent {
  
  produtos: Produto[]=[];
  isLoading=false;
  name:string='';

  constructor(private engine:EstoqueEngineService, private http: HttpClient) {
    
  }

  buscarProdutos(){    
    this.produtos = [];
    this.isLoading=true;
    /*setTimeout(()=>{
      this.isLoading=false;
    },5000);*/
    this.engine.findaMedicamentosCEAF(this.name).subscribe({
        next: (data) => {
          console.log(data);
          this.produtos = data;
          this.isLoading = false;
        },
        error: (e) => console.error(e)
      });
    
  }
}
