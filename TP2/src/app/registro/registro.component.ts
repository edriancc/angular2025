import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  form_state = {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    password: ''
  };

  registrar() {
    console.log('Datos del formulario:', this.form_state);
  }
}
