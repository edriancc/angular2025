import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../services/productos.service';

@Component({
  selector: 'app-detalle',
  imports: [NavbarComponent, RouterModule, CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  private productosService = inject(ProductosService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  producto: Producto | null = null;
  cargando = true;
  error = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.cargarProducto(id);
    });
  }

  cargarProducto(id: number): void {
    this.productosService.obtenerProductoPorId(id).subscribe({
      next: (producto) => {
        this.producto = producto;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar el producto:', error);
        this.error = true;
        this.cargando = false;
      }
    });
  }

  volverATienda(): void {
    this.router.navigate(['/']);
  }
}
