import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { modelContacto } from 'models/modelContacto';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

    formContacto:FormGroup
    regexNumero = /^[0-9]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    constructor(private fb:FormBuilder){
        this.formContacto = this.fb.group({
            nombre:['', Validators.required],
            correo:['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono:['',[Validators.required, Validators.pattern(this.regexNumero), Validators.minLength(4)]],
            ciudad:['', Validators.required],
            mensaje:['', Validators.required]
        })
    }

    enviarDatosContactos(){
        console.log(this.formContacto.value)
        console.log(this.formContacto.get('nombre')?.value)

        const CONTACTO: modelContacto = {
            nombre : this.formContacto.get('nombre')?.value,
            correo : this.formContacto.get('correo')?.value,
            telefono : this.formContacto.get('telefono')?.value,
            ciudad : this.formContacto.get('ciudad')?.value,
            mensaje : this.formContacto.get('mensaje')?.value,
        }

        // TAMBIEN SE PUEDE HACER DE ESTA MANERA
        // const CONTACTO: modelContacto = this.formContacto.value

    }
}
