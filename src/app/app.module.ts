import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelcentralModule } from './modulo/panelcentral/panelcentral.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { NgChartsModule } from 'ng2-charts';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

// Configuración de Keycloak
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8082/', // URL de tu servidor Keycloak
        realm: 'Competenzia', // Nombre del Realm
        clientId: 'angular-competenzia' // ID del Cliente
      },
      initOptions: {
        onLoad: 'login-required', // Para detectar sesiones activas sin redirección
        flow:"standard", // Para usar el flujo de autorización estándar
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html', // Para usar el flujo de autorización estándar
        //checkLoginIframe: false // Deshabilita el iframe
      },
      loadUserProfileAtStartUp: true // Cargar el perfil de usuario al inicio
    });
}


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelcentralModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgChartsModule,
    KeycloakAngularModule 
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
