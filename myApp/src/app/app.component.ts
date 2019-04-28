import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List App';
  icon = 'https://www.logomoose.com/wp-content/uploads/2017/11/Logo-USB1.png';
  isActive = true;
  changeColor() {
    this.isActive = !this.isActive;
  }
  email: string;
  save() {
    console.log(this.email);
  }
}
