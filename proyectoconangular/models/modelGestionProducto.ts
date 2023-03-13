export class modelGestionProducto{
    _id?: any;
    tipo:string;
    marca:string;
    nombre:string;
    precio:number;
    rutaImg:string;

    constructor(id:string, tipo:string, marca:string, nombre:string, precio:number, rutaImg:string){
        this.tipo = tipo
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.rutaImg = rutaImg
    }
}
