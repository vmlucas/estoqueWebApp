import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Produto } from './produto.model';
import { Consolidado } from './consolidado';


@Injectable({
  providedIn: 'root'
})
export class EstoqueEngineService {
   
  
  constructor(private http: HttpClient) { }

  findTipoNames(): Observable<string[]>{
    
    return this.http.get<string[]>(`/buscarTipos`);   
  }
  
  findMedsNames(tipo:string): Observable<string[]>{
    
    return this.http.get<string[]>(`/buscarNomeMedicamentos?tipo=${tipo}`);   
  }

  findMedsDate(nome:string, start:string, end:string): Observable<Produto[]>{ //2024-01-31
    
    return this.http.get<Produto[]>(`/buscarMedicamentosAnoMes?nome=${nome}&start=${start}&end=${end}`);
  }

  
  consolidadoValor():Observable<Consolidado[]>{ 
    
    return this.http.get<Consolidado[]>(`/consolidadoValor`);
  }

  consolidadoValorAno(ano:number):Observable<Consolidado[]>{ 
    
    return this.http.get<Consolidado[]>(`/consolidadoValor?ano=${ano}`);
  }
   
  consolidadoTipoValorAno(tipo:string):Observable<Consolidado[]>{ 
    
    return this.http.get<Consolidado[]>(`/consolidadoTipoValorAno?tipo=${tipo}`);
  }

}
