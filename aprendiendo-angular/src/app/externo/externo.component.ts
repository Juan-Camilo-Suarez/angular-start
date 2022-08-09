import { Component, OnInit } from '@angular/core';
import { Form, FormArray } from '@angular/forms';
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
  public new_user: any;
  public usuario_guardado: any;



  constructor(
    private _peticionesService: PeticionesService
    
  ) { 
    this.userId= 2;
    this.new_user= {
      "name": "",
      "job": ""
  }
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

onSubmit(form:any){

  this._peticionesService.addUser(this.new_user).subscribe(
    response => {
      this.usuario_guardado = response;
      form.reset();
    },
    error => {
      console.log(<any>error);
    }
  );

}
}
