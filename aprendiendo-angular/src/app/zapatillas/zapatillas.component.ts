import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatillas.services";

@Component({
    selector: "zapatillas",
    templateUrl: 'zapatillas.component.html',
    providers:[ZapatillaService] 
})
export class ZapatillasComponent implements OnInit {
    public titulo: String = "componente de zapatillas";
    public zapatillas: Array<Zapatilla> = [];
    public marcas: String[];
    public color: String;
    public mimarca: String;


    constructor(
        private _zapatillaService: ZapatillaService

    ){
        this.mimarca = "no se";        
        this.color = "yellow";
        this.marcas = new Array();
        
        
    }
    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas()
        this.getMarcas();
    }

    getMarcas(){
		this.zapatillas.forEach((zapatilla, index) =>{
			//ṕara no agregar marcas repetidas
			if(this.marcas.indexOf(zapatilla.marca) < 0){
				this.marcas.push(zapatilla.marca);

			}
			
		});
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mimarca);
    }

    addMarca(){
        this.marcas.push(this.mimarca);
    }

    deleteMarca(indice: number){
        //delete this.marcas[indice];

        //elemnto, cuantos borrar
        this.marcas.splice(indice, 1);


    }

    onBlur(){
        console.log("has salido del input");
    }

    mostrarPalabra(){
        alert(this.mimarca)
    }



}
        