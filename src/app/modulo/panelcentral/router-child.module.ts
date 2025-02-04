import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { EmpleadoComponent } from '../empleados/componente/empleado/empleado.component';
import { TestCompetenciaComponent } from '../testCompetencia/test-competencia/test-competencia.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    { path: 'empleado', component: EmpleadoComponent},
    { path: 'test-competencia', component: TestCompetenciaComponent},

]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class RouterChildModule { }
