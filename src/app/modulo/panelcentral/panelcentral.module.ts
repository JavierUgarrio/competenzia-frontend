import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { PanelcentralComponent } from './paginas/panelcentral.component';
import { RouterModule } from '@angular/router';
import { ComunModule } from '../comun/comun.module';
import { EmpleadoModule } from '../empleados/empleado.module';
import { TestCompetenciaModule } from '../testCompetencia/test-competencia.module';
import { GraficasModule } from '../graficas/graficas.module';




@NgModule({
  declarations: [
    HomeComponent,
    PanelcentralComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComunModule, 
    EmpleadoModule,
    TestCompetenciaModule,
    GraficasModule
  ]
})
export class PanelcentralModule { }
