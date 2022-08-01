import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: "zapatillas",
    templateUrl: 'zapatillas.component.html' 
})
export class ZapatillasComponent implements OnInit {
    public titulo: String = "componente de zapatillas";
    public zapatillas: Array<Zapatilla>; 


    constructor(){
        this.zapatillas = [

            new Zapatilla("superstar", 500, "blanco", " adidas", true)
            ,new Zapatilla("yezzy", 600, "verde", "nike", true)

        ];
    }
    ngOnInit() {
        console.log(this.zapatillas);
    }
}
        