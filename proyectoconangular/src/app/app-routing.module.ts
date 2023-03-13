import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { GestionProductoComponent } from './components/admin/gestion-producto/gestion-producto.component';
import { ListaVehiculosComponent } from './components/admin/lista-vehiculos/lista-vehiculos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MotocicletasComponent } from './components/motocicletas/motocicletas.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SliderGComponent } from './components/slider-g/slider-g.component';
import { SliderMComponent } from './components/slider-m/slider-m.component';
import { SliderVComponent } from './components/slider-v/slider-v.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

const routes: Routes = [
    {path:'', component:InicioComponent},
    //{path: 'navBar', component: NavBarComponent}, no se pone por lo que siempre va ser estatica
    {path:'catalogo', component: CatalogoComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'crear-producto', component:CrearProductoComponent},
    {path:'carrito', component: CarritoComponent},
    {path:'footer', component: FooterComponent},
    {path:'registro', component: RegistroComponent},
    {path:'motocicletas', component:MotocicletasComponent},
    {path:'vehiculos', component:VehiculosComponent},
    {path:'slider-g', component:SliderGComponent},
    {path:'slider-v', component:SliderVComponent},
    {path:'slider-m', component:SliderMComponent},
    {path:'admin/productos', component: GestionProductoComponent},
    {path: 'admin/lista-productos', component:ListaVehiculosComponent},
    {path:'adminpage', component:AdminUsersComponent },
    {path:'notFound', component:NotFoundComponent},
    {path:'404',component:NotFoundComponent},
    {path:'**', redirectTo: '404', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
