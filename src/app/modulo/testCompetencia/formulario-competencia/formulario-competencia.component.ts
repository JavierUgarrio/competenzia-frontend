import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadoService } from 'src/app/modulo/comun/servicios/empleado.service';

@Component({
  selector: 'app-formulario-competencia',
  templateUrl: './formulario-competencia.component.html',
  styleUrls: ['./formulario-competencia.component.css']
})
export class FormularioCompetenciaComponent implements OnInit {
  
  public nuevoFormularioCompetencia !: FormGroup;
  private form = inject(FormBuilder);
  private _servicioEmpleado = inject(EmpleadoService);
  private _dialog = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA)
 
  opciones = [
    { value: 'siempre', viewValue: 'Siempre', intValue: 4 },
    { value: 'bastante', viewValue: 'Bastante', intValue: 3 },
    { value: 'raramente', viewValue: 'Raramente', intValue: 2 },
    { value: 'nunca', viewValue: 'Nunca', intValue: 1 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.nuevoFormularioCompetencia = this.form.group({
      
      /*nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      empresa: ['', Validators.required],
      equipo: ['', Validators.required],
      email: ['', Validators.required ],
      telefono:['', Validators.required]
      */
    });
}

  
/**
 * Metodo para guardar formulario
 */

  guardarFormulario(){
    let data = {
      //nombre : this.empleadoNuevoFormulario.get('nombre')?.value,
      //apellidos : this.empleadoNuevoFormulario.get('apellidos')?.value,
      //empresa : this.empleadoNuevoFormulario.get('empresa')?.value,
      //equipo : this.empleadoNuevoFormulario.get('equipo')?.value,
      //email : this.empleadoNuevoFormulario.get('email')?.value,
      //telefono : this.empleadoNuevoFormulario.get('telefono')?.value
    }


    /* if(this.data != null){
      this._servicioEmpleado.guardarEmpleado(data)
      .subscribe((data:any) =>{
        console.log(data);
        this._dialog.close(1);
      }, (error:any)=>{
        console.log(error);
       this._dialog.close(99);
      })
    */
    if(this.data != null){
      console.log(data);
    }else{
      this.cancelar();
       
    }
    
  }



  cancelar(){
    this._dialog.close(98);
  }

}
