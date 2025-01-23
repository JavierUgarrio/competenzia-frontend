import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { EmpleadoComponent } from '../empleados/componente/empleado/empleado.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    { path: 'empleado', component: EmpleadoComponent},

]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class RouterChildModule { }
