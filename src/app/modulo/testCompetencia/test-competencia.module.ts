import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../comun/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestCompetenciaComponent } from './test-competencia/test-competencia.component';
import { FormularioCompetenciaComponent } from './formulario-competencia/formulario-competencia.component';




@NgModule({
  declarations: [
    TestCompetenciaComponent,
    FormularioCompetenciaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    

  ]
})
export class TestCompetenciaModule { }
