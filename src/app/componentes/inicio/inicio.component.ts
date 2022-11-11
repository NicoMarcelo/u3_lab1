import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulario:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(4)]],
      apellido:['',[Validators.required, Validators.minLength(4)]],
      edad:['',[Validators.required, Validators.min(5)]],
      email:['',Validators.required]
    });
  }

  //obtener las validaciones
  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    console.log(this.formulario.value)
  }
}
