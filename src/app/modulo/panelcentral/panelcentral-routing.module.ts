import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PanelcentralComponent } from './paginas/panelcentral.component';

export const routes: Routes = [
    {
        path: 'panelcentral', 
        component: PanelcentralComponent,
        loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
   
})
export class PanelCentralRoutingModule { }
