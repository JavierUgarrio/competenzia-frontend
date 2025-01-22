import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent,
    NavbarComponent
  ],
  exports: [
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class ComunModule { }
