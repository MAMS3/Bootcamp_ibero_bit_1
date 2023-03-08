import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { MotocicletasComponent } from './components/motocicletas/motocicletas.component';
import { SliderVComponent } from './components/slider-v/slider-v.component';
import { SliderMComponent } from './components/slider-m/slider-m.component';
import { SliderGComponent } from './components/slider-g/slider-g.component';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NotFoundComponent,
    NavBarComponent,
    CarritoComponent,
    InicioComponent,
    FooterComponent,
    CatalogoComponent,
    CrearProductoComponent,
    RegistroComponent,
    VehiculosComponent,
    MotocicletasComponent,
    SliderVComponent,
    SliderMComponent,
    SliderGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
