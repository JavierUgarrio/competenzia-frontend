import { Component, OnInit,inject } from '@angular/core';
import { EmpleadoService, EmpleadoServicio } from 'src/app/modulo/comun/servicios/empleado.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { FormularioEmpleadoComponent } from 'src/app/modulo/empleados/componente/formulario-empleado/formulario-empleado.component';
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarRef as MatSnackBarRef, LegacySimpleSnackBar as SimpleSnackBar } from '@angular/material/legacy-snack-bar';
import { ValidarComponent } from 'src/app/modulo/comun/componentes/validar/validar.component';
import { FormularioCompetenciaComponent } from '../formulario-competencia/formulario-competencia.component';

@Component({
  selector: 'test-competencia',
  templateUrl: './test-competencia.component.html',
  styleUrls: ['./test-competencia.component.css']
})
export class TestCompetenciaComponent implements OnInit {

    private _empleadoServicios = inject(EmpleadoService);
    public dialog = inject(MatDialog);
    private _snackbar = inject(MatSnackBar);
    
    empleado :any;
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
    const dialogRef = this.dialog.open( FormularioCompetenciaComponent, { // Aquí se abre el diálogo, hay un espacio vacio que tendre que crear un formulario como componente y añadirlo
        width: '600px'
        
      });
  
      dialogRef.afterClosed().subscribe((resultado :any )=> {
        if(resultado == 1){
          this.snackbar("Empleado agregado","Exito");
          this.getEmpleados();
        }else if(resultado ==99){
          this.snackbar("Error al agregar empleado","Error");
        }
      });
    }
  

    guardarFormulario(){
      const dialogRef = this.dialog.open( FormularioCompetenciaComponent, { // Aquí se abre el diálogo, hay un espacio vacio que tendre que crear un formulario como componente y añadirlo
        width: '1000px',
        data: {}
      });
  
      dialogRef.afterClosed().subscribe((resultado :any )=> {
        if(resultado == 1){
          this.snackbar("Test creado","Exito");
          //this.getEmpleados();
        }else if(resultado ==99){
          this.snackbar("Error en el test","Error");
        }
      }); 
      
    }
  
    
  
    snackbar(mensaje: string, accion: string): MatSnackBarRef<SimpleSnackBar> {
      return this._snackbar.open(mensaje, accion, {
        duration: 2000,
      });
  
    }

}
