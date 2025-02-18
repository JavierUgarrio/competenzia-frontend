import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestCompetenciaService {
  
   private urlApi = environment.urlApiCompetenziaBack; 
  constructor(private http: HttpClient) { }

  // Servicio para guardar el testCompetencia

  guardarTestCompetencia(testCompetencia: any){
    return this.http.post(`${this.urlApi}/test-competencia`,testCompetencia);
  }

  // Servicio mostrar el testCompetencia

  mostrarTestCompetencia(){
    return this.http.get(`${this.urlApi}/app-grafica`);
  }
}

