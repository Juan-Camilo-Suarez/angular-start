import { Component } from '@angular/core';


//crear el componente
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',  
})
//exportar mi componente
export  class VideoJuegoComponent{
    //propiedades
    public titulo: string;
    public listado: string;
    
    //crear el contructor
    constructor() {
        this.titulo = 'Componente de videojuego';
        this.listado = 'Listado de los juegos mas populares ';
        console.log("se ha cargado el componente: videojuego.componente.ts");
    }

}
