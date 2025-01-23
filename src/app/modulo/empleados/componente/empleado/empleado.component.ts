import { Component, OnInit,inject } from '@angular/core';
import { EmpleadoService } from 'src/app/modulo/comun/servicios/empleado.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  private _empleadoServicios = inject(EmpleadoService);

  ngOnInit(): void {
    this.getEmpleado();
  }
  /**
   * es un metodo que llama al servicioEmpleado para obtener los datos
   * utilizando subscribe para que cuando este listo y realice la peticion, se cargue los datos
   */
  getEmpleado(): void {
    this._empleadoServicios.getEmpleados()
    .subscribe(
        (datoempleado: any) => {
          console.log("respuesta empleados: ", datoempleado);
        },
        (error: any) => {
          console.error("Error al obtener empleados: ", error);
        }
      );
  }
  
}
