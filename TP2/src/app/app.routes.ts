import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'catalogo',
        component: CatalogoComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'detalle',
        component: DetalleComponent
    }
];
