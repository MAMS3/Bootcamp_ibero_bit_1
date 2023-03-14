import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelGestionProducto } from 'models/modelGestionProducto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    url = 'http://localhost:4200/api'

    constructor(private http: HttpClient) { }

        getProductos():Observable<any>{
            return this.http.get(this.url+"/productos")
        }
        ///crear-producto'
        postProducto(producto: modelGestionProducto):Observable<any>{
            return this.http.post(this.url+"/crear-producto", producto)
        }

        deleteProducto(id:string): Observable<any>{
            return this.http.delete(this.url+"/eliminar-producto/"+id)
        }

        getProducto(id:string): Observable<any>{
            return this.http.get(this.url+"/productos/"+id)
        }

        putProducto(id:string, producto:modelGestionProducto):Observable<any>{
            return this.http.put(this.url+"/actualizar-producto/"+id, producto)
        }

}
