import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TestCompetenciaService } from '../../comun/servicios/test-competencia.service';
import { error } from 'console';
import { EmpleadoService } from '../../comun/servicios/empleado.service';

@Component({
  selector: 'app-formulario-competencia',
  templateUrl: './formulario-competencia.component.html',
  styleUrls: ['./formulario-competencia.component.css']
})

export class FormularioCompetenciaComponent implements OnInit {
  
  public nuevoFormularioCompetencia !: FormGroup;
  private form = inject(FormBuilder);
  private __servicioTestCompetencia = inject(TestCompetenciaService);
  private __servicioEmpleado = inject(EmpleadoService);
  private _dialog = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);
  empleados : Empleadoss[] = [];
 
  opciones = [
    { value: 4, viewValue: 'Siempre' },
    { value: 3, viewValue: 'Bastante' },
    { value: 2, viewValue: 'Raramente'},
    { value: 0, viewValue: 'Nunca' }
  ];

  
  constructor() { 
    
  }
  ngOnInit(): void {
    this.getEmpleados();

    this.nuevoFormularioCompetencia = this.form.group({
      
      nombreTest : ['', Validators.required],
      empleadosId: ['', Validators.required],
      //Preguntas Trabajo en equipo
      te1a: ['', Validators.required],
      te1b: ['', Validators.required],
      te1c: ['', Validators.required],
      te2a: ['', Validators.required],
      te2b: ['', Validators.required],
      te2c: ['', Validators.required],
      te3a: ['', Validators.required],
      te3b: ['', Validators.required],
      te3c: ['', Validators.required],
      //Preguntas Organizacion
      o1a: ['', Validators.required],
      o1b: ['', Validators.required],
      o1c: ['', Validators.required],
      o2a: ['', Validators.required],
      o2b: ['', Validators.required],
      o2c: ['', Validators.required],
      o3a: ['', Validators.required],
      o3b: ['', Validators.required],
      o3c: ['', Validators.required],
      //Preguntas Liderazgo
      l1a: ['', Validators.required],
      l1b: ['', Validators.required],
      l1c: ['', Validators.required],
      l2a: ['', Validators.required],
      l2b: ['', Validators.required],
      l2c: ['', Validators.required],
      l3a: ['', Validators.required],
      l3b: ['', Validators.required],
      l3c: ['', Validators.required]
    });
}
  
/**
 * Metodo para guardar formulario
 */

  guardarFormulario(){
    console.log(this.nuevoFormularioCompetencia.value);
    let data = {

      nombreTest : this.nuevoFormularioCompetencia.get('nombreTest')?.value,
      empleados: { id: this.nuevoFormularioCompetencia.get('empleadosId')?.value },
      //Preguntas Trabajo en equipo
      te1a: this.nuevoFormularioCompetencia.get('te1a')?.value,
      te1b: this.nuevoFormularioCompetencia.get('te1b')?.value,
      te1c: this.nuevoFormularioCompetencia.get('te1c')?.value,
      te2a: this.nuevoFormularioCompetencia.get('te2a')?.value,
      te2b: this.nuevoFormularioCompetencia.get('te2b')?.value,
      te2c: this.nuevoFormularioCompetencia.get('te2c')?.value,
      te3a: this.nuevoFormularioCompetencia.get('te3a')?.value,
      te3b: this.nuevoFormularioCompetencia.get('te3b')?.value,
      te3c: this.nuevoFormularioCompetencia.get('te3c')?.value,
      //Preguntas Organizacion
      o1a: this.nuevoFormularioCompetencia.get('o1a')?.value,
      o1b: this.nuevoFormularioCompetencia.get('o1b')?.value,
      o1c: this.nuevoFormularioCompetencia.get('o1c')?.value,
      o2a: this.nuevoFormularioCompetencia.get('o2a')?.value,
      o2b: this.nuevoFormularioCompetencia.get('o2b')?.value,
      o2c: this.nuevoFormularioCompetencia.get('o2c')?.value,
      o3a: this.nuevoFormularioCompetencia.get('o3a')?.value,
      o3b: this.nuevoFormularioCompetencia.get('o3b')?.value,
      o3c: this.nuevoFormularioCompetencia.get('o3c')?.value,
      //Preguntas Liderazgo
      l1a: this.nuevoFormularioCompetencia.get('l1a')?.value,
      l1b: this.nuevoFormularioCompetencia.get('l1b')?.value,
      l1c: this.nuevoFormularioCompetencia.get('l1c')?.value,
      l2a: this.nuevoFormularioCompetencia.get('l2a')?.value,
      l2b: this.nuevoFormularioCompetencia.get('l2b')?.value,
      l2c: this.nuevoFormularioCompetencia.get('l2c')?.value,
      l3a: this.nuevoFormularioCompetencia.get('l3a')?.value,
      l3b: this.nuevoFormularioCompetencia.get('l3b')?.value,
      l3c: this.nuevoFormularioCompetencia.get('l3c')?.value,
    }
      this.__servicioTestCompetencia.guardarTestCompetencia(data)
      .subscribe((data:any) =>{
        console.log("Formulario guardado con exito"+ data);
        console.log(data.nombreTest,data.empleadoId);
        console.log(this.empleados)
        this._dialog.close(1);
      }, (error:any)=>{
        console.log(error);
       this._dialog.close(99);
    })
  }
cancelar1(){
  this._dialog.close(98);
}

getEmpleados(){
  this.__servicioEmpleado.getEmpleados().subscribe({
    next: (data: any) => {
      this.empleados = data; // Aquí se asigna la lista de empleados
      console.log(this.empleados);
    },
    error: (error) => {
      console.error('Error al obtener los empleados:', error);
    },
  });
}





}
export interface Empleadoss{
  id: number;
  nombre: string;
  apellidos: string;
  empresa: string;
  equipo: string;
  email: string;
  telefono: number;
}

