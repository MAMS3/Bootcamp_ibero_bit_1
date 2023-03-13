import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/service/productos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.css']
})
export class GestionProductoComponent{

    tituloComponente: string ='Crear'
    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;

    constructor (private fb:FormBuilder, private _productosService:ProductosService) {
        this.productoForm = this.fb.group({
            tipo: ['', Validators.required],
            marca: ['', Validators.required],
            nombre: ['',Validators.required],
            precio:['', [Validators.minLength(7), Validators.required, Validators.pattern(this.regexNumero)]],
            rutaImg:['',Validators.required],
        })
    }

    enviarInfo(){
        this._productosService.postProducto(this.productoForm.value).subscribe(data=>{
            Swal.fire({
                icon: 'success',
                title: 'Producto creado',
              })
        }, error => {
            console.log(error)
        })
    }
}
