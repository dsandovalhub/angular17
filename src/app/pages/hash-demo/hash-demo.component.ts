import { Component } from '@angular/core';
import { Sha256Service } from '../sha256.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hash-demo',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './hash-demo.component.html',
  styleUrl: './hash-demo.component.css'
})
export class HashDemoComponent {

  password: string = '';
  salt: string = '';
  hashedPassword: string = '';

  constructor(private sha256Service: Sha256Service) { }

  generateHash() {
    this.salt = this.sha256Service.generateSalt(16);
    console.log('this.salt',this.salt );
    
    this.hashedPassword = this.sha256Service.hashWithSalt(this.password, this.salt);
  }

}
