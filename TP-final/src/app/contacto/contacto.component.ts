import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [NavbarComponent, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  private fb = inject(FormBuilder);
  
  contactoForm: FormGroup;
  enviado = false;
  enviando = false;

  constructor() {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      asunto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  get nombre() { return this.contactoForm.get('nombre'); }
  get email() { return this.contactoForm.get('email'); }
  get telefono() { return this.contactoForm.get('telefono'); }
  get asunto() { return this.contactoForm.get('asunto'); }
  get mensaje() { return this.contactoForm.get('mensaje'); }

  onSubmit(): void {
    if (this.contactoForm.valid) {
      this.enviando = true;
      
      // Simular envío del formulario
      setTimeout(() => {
        console.log('Datos del formulario:', this.contactoForm.value);
        this.enviado = true;
        this.enviando = false;
        this.contactoForm.reset();
      }, 2000);
    } else {
      this.marcarCamposComoTocados();
    }
  }

  marcarCamposComoTocados(): void {
    Object.keys(this.contactoForm.controls).forEach(key => {
      const control = this.contactoForm.get(key);
      control?.markAsTouched();
    });
  }

  resetearFormulario(): void {
    this.contactoForm.reset();
    this.enviado = false;
    this.enviando = false;
  }
}
