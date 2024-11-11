import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { EstoqueEngineService } from './estoque-engine.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,RouterLink, RouterLinkActive,
            FormsModule,ReactiveFormsModule,
            HttpClientModule
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'estoqueWeb';
  
  constructor(private engine:EstoqueEngineService, private http: HttpClient, private router: Router) { }

  
  
}
