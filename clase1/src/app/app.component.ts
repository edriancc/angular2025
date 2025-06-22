import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primer Angular App';
  count = 0;

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
