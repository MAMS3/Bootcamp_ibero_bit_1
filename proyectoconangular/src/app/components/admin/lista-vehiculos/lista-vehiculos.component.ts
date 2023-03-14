import { Component, OnInit } from '@angular/core';
import { modelGestionProducto } from 'models/modelGestionProducto';
import { ProductosService } from 'src/app/service/productos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {

    listaProductos:modelGestionProducto[] = [];


    constructor(private _productoService: ProductosService) { }

    ngOnInit(): void {
        this.obtenerProductos()
    }


        obtenerProductos(){
            this._productoService.getProductos().subscribe(data => {
               console.log(data)
              this.listaProductos = data
          }, err => console.log(err))
        }

        eliminarProducto(id:any){
            Swal.fire({
                title: 'Esta seguro que desea eliminar este producto?',
                text: "Esta acción eliminara por definitivo el producto",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar'
              }).then((result) => {
                if (result.isConfirmed) {
                    this._productoService.deleteProducto(id).subscribe(data => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Producto eliminado con éxito',
                          })
                          this.obtenerProductos()
                    })
                }
              })
        }

}
