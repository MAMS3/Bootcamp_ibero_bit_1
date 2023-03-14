import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.css']
})
export class GestionProductoComponent implements OnInit {

    tituloComponente: string = 'Crear'
    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;
    id: string | null

    constructor (private fb:FormBuilder, private _productosService:ProductosService, private router: Router, private idRoute:ActivatedRoute) {
        this.productoForm = this.fb.group({
            tipo: ['', Validators.required],
            marca: ['', Validators.required],
            nombre: ['',Validators.required],
            precio:['', [Validators.minLength(7), Validators.required, Validators.pattern(this.regexNumero)]],
            rutaImg:['',Validators.required],
        })
        this.id = this.idRoute.snapshot.paramMap.get('id')
    }

    ngOnInit(){
        this.accionSolicitada()
    }

    enviarInfo(){
        if (this.id == null) {
            //CREAR PRODUCTO
            this._productosService.postProducto(this.productoForm.value).subscribe(data=> {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto creado',
                  })
                  this.router.navigate(['/admin/lista-productos'])
            }, error => {
                console.log(error)
            })
        } else{
            //ACTUALIZAR PRODUCTO
            this._productosService.putProducto(this.id, this.productoForm.value).subscribe(data =>{
                Swal.fire({
                    icon: 'success',
                    title: 'Producto actualizado',
                })
                this.router.navigate(['/admin/lista-productos'])
            }, error => {
                console.log(error)
            })
        }
    }

    accionSolicitada(){
        if (this.id !== null){
            this.tituloComponente = 'Modificar'
            this._productosService.getProducto(this.id).subscribe(data => {
                this.productoForm.setValue({
                    tipo: data.tipo,
                    marca: data.marca,
                    nombre: data.nombre,
                    precio: data.precio,
                    rutaImg: data.rutaImg
                })
            })
        }

    }
}


