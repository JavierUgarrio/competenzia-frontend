import { Component, inject, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { EmpleadoService, EmpleadoServicio } from '../../comun/servicios/empleado.service';
import { TestCompetenciaService } from '../../comun/servicios/test-competencia.service';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Chart } from 'chart.js';




@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
  
})
export class GraficaComponent implements OnInit {

  objetoBarra : any;
  private _empleadoServicios = inject(EmpleadoService);
  private _testCompetencia = inject(TestCompetenciaService);
  public dialog = inject(MatDialog);
      
  empleado :any;
  empleados:EmpleadoServicio [] = [];
  columnas : string[] = ['id','nombre','apellidos','empresa','equipo','email','telefono'];
   // El estado del panel para cada empleado (controlado por el ID)
   panelOpenState: { [key: number]: boolean } = {}; 

  constructor() { }

  ngOnInit(): void {
    
    this.getEmpleados();
    this.mostrarTestCompetencia();
    
  }


  dataSource= new MatTableDataSource<ITestCompetenciaGrafica>()

  mostrarTestCompetencia(){
    this._testCompetencia.mostrarTestCompetencia().subscribe( (data: any) =>{
      console.log(data);
      this.procesarTestCompetenciaServicio(data);
    },(error:any) =>{
      console.error(error);
    });
  }

  procesarTestCompetenciaServicio(resp: any){
    const trabajoEquipo1 :number[] = [];
    const trabajoEquipo2 :number[] = [];
    const trabajoEquipo3 :number[] = [];
    const organizacion1 :number[] = [];
    const organizacion2 :number[] = [];
    const organizacion3 :number[] = [];
    const liderazgo1 :number[] = [];
    const liderazgo2 :number[] = [];
    const liderazgo3 :number[] = [];
    const id:number[] = [];
    const nombre:string[] = [];

    const datosTest : ITestCompetenciaGrafica[] = [];

    if(resp.metadata[0].coode =="00"){
      let listaTest = resp.respuestaCompetencia.listaTestCompetencia;
      listaTest.forEach((element:ITestCompetenciaGrafica)=>{
        element.empleadosId = element.empleadosId;
        //datosTest.push(element);
        trabajoEquipo1.push(element.te1);
        trabajoEquipo2.push(element.te2);
        trabajoEquipo3.push(element.te3);
        organizacion1.push(element.o1);
        organizacion2.push(element.o2);
        organizacion3.push(element.o3);
        liderazgo1.push(element.l1);
        liderazgo2.push(element.l2);
        liderazgo3.push(element.l3);
        id.push(element.empleadosId);
        nombre.push(element.nombreTest);
        
      })
      //this.dataSource = new MatTableDataSource<ITestCompetenciaGrafica>(datosTest);

      //graficos
      this.objetoBarra = new Chart('canvas-bar',{
        type: 'bar',
        data:{
          labels: nombre,
          datasets:[
            { label: 'Trabajo en equipo nivel 1', data: trabajoEquipo1}
          ]
        }

      })

    }
  }

  //traido del test competencia
      getEmpleados(){
        this._empleadoServicios.getEmpleados().subscribe({
          next: (data: any) => {
            this.empleados = data; // Aquí se asigna la lista de empleados
            console.log(this.empleados);
          },
          error: (error) => {
            console.error('Error al obtener los empleados:', error);
          },
        });
      }
    
/**
 * muestra el desplegable 
 */
// Método para alternar el estado del panel
// Función para alternar el estado de apertura de un panel según el ID del empleado
  togglePanelState(empleadoId: number): void {
    this.panelOpenState[empleadoId] = !this.panelOpenState[empleadoId];
  }
}
/*
export interface ITestCompetenciaGrafica{
  nombreTest : string,
  empleadosId: number,
  //Preguntas Trabajo en equipo
  te1a:number,
  te1b:number,
  te1c:number,
  te2a:number,
  te2b:number,
  te2c:number,
  te3a:number,
  te3b:number,
  te3c:number,
  //Preguntas Organizacion
  o1a:number,
  o1b:number,
  o1c:number,
  o2a:number,
  o2b:number,
  o2c:number,
  o3a:number,
  o3b:number,
  o3c:number,
  //Preguntas Liderazgo
  l1a:number,
  l1b:number,
  l1c:number,
  l2a:number,
  l2b:number,
  l2c:number,
  l3a:number,
  l3b:number,
  l3c:number
}
  */
export interface ITestCompetenciaGrafica{
  nombreTest : string,
  empleadosId: number,
  //Preguntas Trabajo en equipo
  te1:number,
  te2:number,
  te3:number,
  //Preguntas Organizacion
  o1:number,
  o2:number,
  o3:number,
 
  //Preguntas Liderazgo
  l1:number,
  l2:number,
  l3:number

 
}