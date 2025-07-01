import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../services/productos.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private productosService = inject(ProductosService);
  
  productos: Producto[] = [];
  cargando = true;
  error = false;

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosService.obtenerProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        this.error = true;
        this.cargando = false;
      }
    });
  }
}
