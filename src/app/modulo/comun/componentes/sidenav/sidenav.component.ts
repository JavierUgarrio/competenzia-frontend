import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

menuNav = [
    {name: "Home", route: "home", icon:"psychology"},
    {name: 'Empleados', route:"empleados", icon:"people_alt"},
    {name: 'Formulario', route:"Formulario", icon:"summarize"},
    {name: 'Graficos', route:"Graficos", icon:"assessment"}
]

  constructor() { }

  ngOnInit(): void {
  }

}
