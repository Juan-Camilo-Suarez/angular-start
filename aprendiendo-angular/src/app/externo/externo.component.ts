import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.sevices';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user:  any;
  public userId: any;
  public fecha :any;

  constructor(
    private _peticionesService: PeticionesService
    
  ) { 
    this.userId= 2;
  }

  ngOnInit(){

    this.fecha = new Date(2019,5,20);

    this.cargaruser();
    

}
cargaruser(){
  this.user =false;
  this._peticionesService.getUser(this.userId).subscribe(
    resultado => {
      this.user = resultado.data;
    
  },
  error => {
      console.log(<any>error);
  });

}
}