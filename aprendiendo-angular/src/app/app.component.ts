import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo JS - Angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public config;

  //constructor
  constructor(){
    //usando la variable de config importada
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideoJuegos(value:boolean){
    this.mostrar_videojuegos = value;
  }
}
