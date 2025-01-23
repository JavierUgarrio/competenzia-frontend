import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.urlApiCompetenziaBack; 

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  constructor(private http: HttpClient) { }

  /*
  metodo para obtener los empleados a traves del metodo get. 
  Se consigue todos los empleados
  */
  getEmpleados(){
    const endpoint = `${(url)}/empleados`;
    return this.http.get(endpoint);
  }
}
