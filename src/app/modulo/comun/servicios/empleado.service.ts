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

/**
 * Metodo para guardar nuevo empleado
 */
 guardarEmpleado(empleado : any){
  return this.http.post(`${this.urlApi}/empleados`, empleado);
 }

 /**
 * Metodo para actualizar empleado
 */

 actualizarEmpleado(empleado :any, id:number){
  return this.http.put(`${this.urlApi}/empleados/${id}`, empleado);
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
