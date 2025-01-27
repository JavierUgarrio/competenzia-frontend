import { Component, OnInit,inject } from '@angular/core';
import { EmpleadoService, EmpleadoServicio } from 'src/app/modulo/comun/servicios/empleado.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  private _empleadoServicios = inject(EmpleadoService);
  empleados:EmpleadoServicio [] = [];
  columnas : string[] = ['id','nombre','apellidos','empresa','equipo','email','telefono','acciones'];

  ngOnInit(): void {
    this._empleadoServicios.getEmpleados().subscribe({
      next: (data: any) => {
        this.empleados = data; // Aquí se asigna la lista de empleados
      },
      error: (error) => {
        console.error('Error al obtener los empleados:', error);
      },
    });
  }

 
 
}
