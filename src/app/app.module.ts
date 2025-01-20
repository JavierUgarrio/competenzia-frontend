import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelcentralModule } from './modulo/panelcentral/panelcentral.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelcentralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
