import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { modelContacto } from "models/modelContacto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactoServiceService {

    url = 'http://localhost:4000/api'

    constructor (private http:HttpClient) { }

    postContacto(dataContacto:modelContacto): Observable<any>{
        return this.http.post(`${this.url}/crear-contactos`, dataContacto)
    }
}
