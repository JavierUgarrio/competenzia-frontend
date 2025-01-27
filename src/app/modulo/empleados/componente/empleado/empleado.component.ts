import { Component, OnInit,inject } from '@angular/core';
import { EmpleadoService, EmpleadoServicio } from 'src/app/modulo/comun/servicios/empleado.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormularioEmpleadoComponent } from '../formulario-empleado/formulario-empleado.component';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  private _empleadoServicios = inject(EmpleadoService);
  public dialog = inject(MatDialog);
  
  empleados:EmpleadoServicio [] = [];
  columnas : string[] = ['id','nombre','apellidos','empresa','equipo','email','telefono','acciones'];

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this._empleadoServicios.getEmpleados().subscribe({
      next: (data: any) => {
        this.empleados = data; // Aquí se asigna la lista de empleados
        console.log(this.empleados);
      },
      error: (error) => {
        console.error('Error al obtener los empleados:', error);
      },
    });
  }
  ventanaDialogoEmepleado(){
  const dialogRef = this.dialog.open( FormularioEmpleadoComponent, { // Aquí se abre el diálogo, hay un espacio vacio que tendre que crear un formulario como componente y añadirlo
      width: '600px'
      
    });

    dialogRef.afterClosed().subscribe((resultado :any )=> {
      
    });
  }
}
 
 
