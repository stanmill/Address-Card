import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText = 'initial value';
  
  constructor() {
    this.user = new User();
    this.user.name = 'Fooo';
    this.user.designation = 'Software engeneer';
    this.user.address = '1000 Street City State';
    this.user.phone = [ '123-123-1234'];

  }
}
