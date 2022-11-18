import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend;
  constructor() { }

  obtener_datos(datos:any){
    console.log("Mostrando datos del formulario")
    console.log(datos)
  }
}
