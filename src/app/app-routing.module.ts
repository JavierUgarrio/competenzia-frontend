import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelCentralRoutingModule } from './modulo/panelcentral/panelcentral-routing.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/panelcentral' },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,{
      enableTracing: false,// enableTracing: Activa el registro detallado de todas las actividades de enrutamiento. Útil para depuración.
      useHash: true // useHash: Usa el hash (#) en las URL para la navegación. Útil para evitar problemas de configuración del servidor.
    }
  ),
  PanelCentralRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
