import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';

import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ValidarComponent } from './componentes/validar/validar.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ValidarComponent,

  ],
  exports: [
    SidenavComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ComunModule { }
