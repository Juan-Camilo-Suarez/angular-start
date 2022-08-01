import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


//crear el componente
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',  
})
//exportar mi componente
export  class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {
    //propiedades
    public titulo: string;
    public listado: string;
    
    //crear el contructor
    constructor() {
        this.titulo = 'Componente de videojuego';
        this.listado = 'Listado de los juegos mas populares ';
        console.log("se ha cargado el componente: videojuego.componente.ts");
    }
    //hook para cargar el componente
    ngOnInit(){
        console.log("On init  ejecutado");
        
    }
    //cuando hay un cambio en el code
    ngDoCheck(){
        console.log("do check ejecutado ");
        
    }
    //funcion 
    cambiarTitulo(){
        this.titulo = "nuevo componente"

    }

    
    //se ejecuta antes de borrar un componente
    ngOnDestroy(){
        console.log("onDestroy");
    }
}
