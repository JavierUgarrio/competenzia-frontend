import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { PanelcentralComponent } from './paginas/panelcentral.component';
import { RouterModule } from '@angular/router';
import { ComunModule } from '../comun/comun.module';




@NgModule({
  declarations: [
    HomeComponent,
    PanelcentralComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComunModule
  ]
})
export class PanelcentralModule { }
