import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{
    registroForm:FormGroup;
    regexNumero = /^[0-9]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    constructor(private fb: FormBuilder){
        this.registroForm = this.fb.group({
            nombre: ['', [Validators.required]],
            telefono: ['',[Validators.required, Validators.pattern(this.regexNumero), Validators.minLength(10)]],
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            password: ['', [Validators.required]],
            password2: ['', [Validators.required]],
        });
    }

    enviarDatos(){
        console.log(this.registroForm);
    }
}
