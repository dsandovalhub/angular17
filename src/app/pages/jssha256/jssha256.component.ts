import { Component } from '@angular/core';
import { Jssha256Service } from '../jssha256.service';

@Component({
  selector: 'app-jssha256',
  standalone: true,
  imports: [],
  templateUrl: './jssha256.component.html',
  styleUrl: './jssha256.component.css'
})
export class Jssha256Component {
  constructor(private jssha256Service: Jssha256Service) { }

  onSubmit(event: KeyboardEvent): void {
    //const password = form.password;
    const password = event.target as HTMLInputElement;
    const salt = 'e18ab9c63f9ceeaf2f3c483a545c46d9'//this.jssha256Service.generateSalt(16);
    const hashedPassword = this.jssha256Service.hashPassword(password.value, salt);

    console.log('Password:', password.value);
    console.log('Salt:', salt);
    console.log('Hashed Password:', hashedPassword);
  }

}
