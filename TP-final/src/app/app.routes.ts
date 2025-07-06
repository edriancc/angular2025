import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    }
];
