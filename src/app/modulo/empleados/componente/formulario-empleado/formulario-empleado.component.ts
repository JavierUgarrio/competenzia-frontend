import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadoService } from 'src/app/modulo/comun/servicios/empleado.service';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent implements OnInit {

  public empleadoNuevoFormulario!: FormGroup;
  private form = inject(FormBuilder);
  private _servicioEmpleado = inject(EmpleadoService);
  private _dialog = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA)
 
  constructor() { }

  ngOnInit(): void {
    this.empleadoNuevoFormulario = this.form.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      empresa: ['', Validators.required],
      equipo: ['', Validators.required],
      email: ['', Validators.required ],
      telefono:['', Validators.required]
    });
    if(this.data != null) {
      this.editarEmpleado(this.data);
    }
}

  
/**
 * Metodo para guardar formulario
 */

  guardarFormulario(){
    let data = {
      nombre : this.empleadoNuevoFormulario.get('nombre')?.value,
      apellidos : this.empleadoNuevoFormulario.get('apellidos')?.value,
      empresa : this.empleadoNuevoFormulario.get('empresa')?.value,
      equipo : this.empleadoNuevoFormulario.get('equipo')?.value,
      email : this.empleadoNuevoFormulario.get('email')?.value,
      telefono : this.empleadoNuevoFormulario.get('telefono')?.value
    }
    if(this.data != null){
      //si la data viene con los datos se actualizar el formulario
      this._servicioEmpleado.actualizarEmpleado(data, this.data.id)
      .subscribe((data:any) =>{
        this._dialog.close(1);
      }
      , (error:any)=>{
        console.log(error);
        this._dialog.close(99);
      })


    }else{
      // Guardar nuevo empleado
      this._servicioEmpleado.guardarEmpleado(data)
      .subscribe((data:any) =>{
        console.log(data);
        this._dialog.close(1);
      }, (error:any)=>{
        console.log(error);
       this._dialog.close(99);
      }) 
    }
    
  }

/**
 * Metodo para actualizar empleado
 */
  editarEmpleado(data:any){
    this.empleadoNuevoFormulario = this.form.group({
      nombre: [data.nombre, Validators.required],
      apellidos: [data.apellidos, Validators.required],
      empresa: [data.empresa, Validators.required],
      equipo: [data.equipo, Validators.required],
      email: [data.email, Validators.required ],
      telefono:[data.telefono, Validators.required]
    });
  }

  cancelar(){
    this._dialog.close(98);
  }

}
