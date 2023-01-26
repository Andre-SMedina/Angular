import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Pedro';
  userData = { email: 'pedro@gmail.com', role: 'admin' };
  title = 'inicio';
}
