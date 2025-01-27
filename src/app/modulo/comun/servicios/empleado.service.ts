import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  private urlApi = environment.urlApiCompetenziaBack; 

  constructor(private http: HttpClient) { }

  /*
  metodo para obtener los empleados a traves del metodo get. 
  Se consigue todos los empleados
  
  getEmpleados(){
    const endpoint = `${(url)}/empleados`;
    return this.http.get(endpoint);
  }
  */
  /*
  metodo para obtener los empleados a traves del metodo get.
  

  */
 /**
   * Método para obtener todos los empleados a través de la API.
   * 
   * @returns Un Observable que emite un arreglo de empleados.
   */
 getEmpleados(): Observable<EmpleadoServicio[]> {
  // Realiza la solicitud GET a la API
  return this.http.get<{ respuestaEmpleados: { empleados: EmpleadoServicio[] } }>(`${this.urlApi}/empleados`).pipe(
    map(respuesta => respuesta.respuestaEmpleados.empleados) // Extrae solo el arreglo de empleados
  );
}
}

export interface EmpleadoServicio{
  id: number;
  nombre: string;
  apellidos: string;
  empresa: string;
  equipo: string;
  email: string;
  telefono: number;
}
