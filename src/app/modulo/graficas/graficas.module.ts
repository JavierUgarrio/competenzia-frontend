import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaComponent } from './grafica/grafica.component';
import { MaterialModule } from '../comun/material.module';
import { EmpleadoModule } from '../empleados/empleado.module';
import { TestCompetenciaModule } from '../testCompetencia/test-competencia.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  declarations: [
    GraficaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EmpleadoModule,
    TestCompetenciaModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
  ]
})
export class GraficasModule { }




  
