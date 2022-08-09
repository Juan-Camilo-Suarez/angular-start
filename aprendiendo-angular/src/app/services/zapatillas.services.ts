import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [

            new Zapatilla("superstar", 500, "blanco", " adidas", true)
            ,new Zapatilla("yezzy", 600, "verde", "nike", false)
            ,new Zapatilla("nike", 75, "azul", "puma", true)

        ];
     }

    getTexto(){
        return "hola mundo esto es un test de un servico"
    }

    getZapatillas(): Array<Zapatilla> {

        return this.zapatillas;
    }

}