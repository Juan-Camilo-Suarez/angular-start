import { Component } from '@angular/core';


//crear el componente
@Component({
    selector: 'videojuego',
    template: `
               <h2> componente de video juego </h2>
               <ul>
                   <li>GTA</li>
                   <li>Fifa</li>
                   <li>tekken</li>
                   <li>mario</li>
               </ul>
               
               `    
})
//exportar mi componente
export  class VideoJuegoComponent{
    //crear el contructor
    constructor() {
        console.log("se ha cargado el componente: videojuego.componente.ts");
    }

}
