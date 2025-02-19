import { Component, inject, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  private keyCloakService = inject(KeycloakService)

menuNav = [
  {name: "Home", route: "home", icon:"psychology"},
  {name: 'Empleados', route:"empleado", icon:"people_alt"},
  {name: 'Formulario', route:"test-competencia", icon:"summarize"},
  {name: 'Graficos', route:"app-grafica", icon:"assessment"}
]

  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this,this.keyCloakService.logout();
  }
}
