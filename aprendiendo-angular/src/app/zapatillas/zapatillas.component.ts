import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: "zapatillas",
    templateUrl: 'zapatillas.component.html' 
})
export class ZapatillasComponent implements OnInit {
    public titulo: String = "componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];


    constructor(){
        this.marcas = new Array();
        this.zapatillas = [

            new Zapatilla("superstar", 500, "blanco", " adidas", true)
            ,new Zapatilla("yezzy", 600, "verde", "nike", false)
            ,new Zapatilla("nike", 75, "azul", "puma", true)

        ];
    }
    ngOnInit() {
        console.log(this.zapatillas);
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



}
        