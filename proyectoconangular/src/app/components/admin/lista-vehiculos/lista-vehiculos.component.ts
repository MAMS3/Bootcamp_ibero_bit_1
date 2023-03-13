import { Component, OnInit } from '@angular/core';
import { modelGestionProducto } from 'models/modelGestionProducto';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {

    listaProductos:modelGestionProducto[] = [];


    constructor(private_productoService: ProductosService) { }

    ngOnInit(): void {
        this.obtenerProductos()
    }


        obtenerProductos(){
          //  this._productoService.getProductos().subscribe(data => {
           //     console.log(data)
           //     this.listaProductos = data
         //   }, error => console.log(error))
        }

}
