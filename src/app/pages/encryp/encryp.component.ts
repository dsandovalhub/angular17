import { Component } from '@angular/core';
import { EncrypService } from '../encryp.service';

@Component({
  selector: 'app-encryp',
  standalone: true,
  imports: [],
  templateUrl: './encryp.component.html',
  styleUrl: './encryp.component.css'
})
export class EncrypComponent {
  constructor(private encrypService: EncrypService) {}

  // Registrar usuario (ejemplo)
  register(pass: string) {
    const password = pass;//'mypassword';
    console.log('password:', password);
    const { salt, derivedKey } = this.encrypService.registerUser(password);
    console.log('Salt:', salt);
    console.log('Derived Key:', derivedKey);
    // Almacenar salt y derivedKey en tu base de datos
  }

  // Verificar contraseña (ejemplo)
  login(pass: string) {
    const password = pass//'abcd1234';
    const salt = '0cd877836f918535b16e2cc3993d47f9'//'stored_salt_from_db'; // Obtén la sal almacenada en la base de datos
    const storedKey = 'b298999a59fa95ef889ba80957c65caf9ca6013076c3387bd96047abc2d556e2' //'stored_key_from_db'; // Obtén la clave derivada almacenada en la base de datos

    const isValid = this.encrypService.verifyPassword(password, salt, storedKey);
    console.log('Password is valid:', isValid);
  }
  

}
