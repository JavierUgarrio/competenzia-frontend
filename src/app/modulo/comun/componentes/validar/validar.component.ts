import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {

  public data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef);
  private _empleadoServicio = inject(EmpleadoService);

  constructor() { }

  ngOnInit(): void {
  }

  confEliminarEmpleado(){
    if(this.data !=null){
      this._empleadoServicio.eliminarEmpleado(this.data.id)
       .subscribe(( data :any)=>{
         console.log('Empleado eliminado correctamente');
         this.dialogRef.close(1);
       },(error:any)=>{
        this.dialogRef.close(99);
       })
    }else{
      console.log('Error al eliminar empleado');
      this.dialogRef.close(99);
    }

  }

  cancelarEliminar(){
    this.dialogRef.close(98);
  }

}
