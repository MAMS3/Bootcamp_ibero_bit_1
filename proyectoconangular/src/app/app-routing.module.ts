import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    {path:'', component:InicioComponent},
    //{path: 'navBar', component: NavBarComponent}, no se pone por lo que siempre va ser estatica
    {path:'catalogo', component: CatalogoComponent},
    {path:'contacto', component:ContactoComponent},
    {path: 'crear-producto', component:CrearProductoComponent},
    {path: 'carrito', component: CarritoComponent},
    {path:'footer', component: FooterComponent},
    {path: 'registro', component: RegistroComponent},
    {path:'notFound', component:NotFoundComponent},
    {path:'404',component:NotFoundComponent},
    {path:'**', redirectTo: '404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
