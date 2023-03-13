import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelGestionProducto } from 'models/modelGestionProducto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    url = 'http://localhost:4000/api'

    constructor(private http: HttpClient) { }

        getProductos():Observable<any>{
            return this.http.get(this.url+"/productos")
        }
        ///crear-producto'
        postProducto(producto:modelGestionProducto):Observable<any>{
            return this.http.post(this.url+"/crear-producto", producto)
        }

}
