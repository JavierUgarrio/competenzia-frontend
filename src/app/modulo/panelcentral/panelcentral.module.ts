import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { PanelcentralComponent } from './paginas/panelcentral.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent,
    PanelcentralComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PanelcentralModule { }
