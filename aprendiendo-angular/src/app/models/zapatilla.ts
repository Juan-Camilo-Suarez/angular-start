export class Zapatilla{
    /*
    forma 1:

    public nombre: string;
    public precio: number;
    public color: string;
    public marca: string;
    public stook: boolean;

    constructor(nombre: string, precio: number, color: string, marca: string, stook: boolean){
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.marca = marca;
        this.stook = stook;
    }
    */

    constructor(
        public nombre: string,
        public precio: number,
        public color: string,
        public marca: string,
        public stook: boolean
    ){}

}