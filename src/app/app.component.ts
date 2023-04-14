import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'myng01'

  destroy = false

  comdestroy() {
    this.destroy = true
  }
}
