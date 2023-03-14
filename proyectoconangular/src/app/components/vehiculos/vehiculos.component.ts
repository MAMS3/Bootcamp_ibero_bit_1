import { Component, OnInit } from '@angular/core';
import { modelGestionProducto } from 'models/modelGestionProducto';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit{

    listaProductos: modelGestionProducto[] = [];

    public urlAssets: string = ""

    constructor(private _productoService: ProductosService) {}

    ngOnInit(): void {
        this._productoService.getProductos().subscribe(data => {
            console.log(data)
           this.listaProductos = data
       }, err => console.log(err))
    }
}
