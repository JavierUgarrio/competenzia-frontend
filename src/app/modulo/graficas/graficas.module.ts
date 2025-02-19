import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaComponent } from './grafica/grafica.component';
import { MaterialModule } from '../comun/material.module';
import { EmpleadoModule } from '../empleados/empleado.module';
import { TestCompetenciaModule } from '../testCompetencia/test-competencia.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { NgChartsModule } from 'ng2-charts';






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
    NgChartsModule
  
    
  ]
})
export class GraficasModule { }




  
