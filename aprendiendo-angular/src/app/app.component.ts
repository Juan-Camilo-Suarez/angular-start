import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo JS - Angular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideoJuegos(value:boolean){
    this.mostrar_videojuegos = value;
  }
}
