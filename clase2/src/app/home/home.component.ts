import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Primer Angular App';
  count = 0;
  products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 },
    { name: 'Product 4', price: 400 },
    { name: 'Product 5', price: 500 },
    { name: 'Product 6', price: 600 },
    { name: 'Product 7', price: 700 },
    { name: 'Product 8', price: 800 },
    { name: 'Product 9', price: 900 },
    { name: 'Product 10', price: 1000 }
  ]

  increment() {
    if (this.count >= 10) {
      alert('Count cannot exceed 10');
      return;
    }
    this.count++;
  }

  decrement() {
    if (this.count <= 0) {
      alert('Count cannot be less than 0');
      return;
    }
    this.count--;
  }

}
