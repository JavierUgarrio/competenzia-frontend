import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './componente/empleado/empleado.component';
import { MaterialModule } from '../comun/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioEmpleadoComponent } from './componente/formulario-empleado/formulario-empleado.component';



@NgModule({
  declarations: [
    EmpleadoComponent,
    FormularioEmpleadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  

  ]
})
export class EmpleadoModule { }
