import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrypService {
  // Número de iteraciones y longitud de la clave
  private iterations = 65536; //100000;
  private keyLength = 256 / 32; // 256 bits / 8 bits per byte = 32 bytes

  constructor() { }

  // Función para generar una sal aleatoria
  private generateSalt(): string {
    return crypto.lib.WordArray.random(128 / 8).toString();
  }

  // Función para derivar la clave usando PBKDF2
  private deriveKey(password: string, salt: string): string {
    return crypto.PBKDF2(password, salt, {
      //keySize: this.keyLength,
      iterations: this.iterations
    }).toString();
  }

  // Función para registrar usuario: almacena sal y clave derivada
  registerUser(password: string): { salt: string, derivedKey: string } {
    const salt = this.generateSalt();
    const derivedKey = this.deriveKey(password, salt);
    // Aquí guardarías salt y derivedKey en tu base de datos
    return { salt, derivedKey };
  }

  // Función para verificar la contraseña del usuario
  verifyPassword(password: string, storedSalt: string, storedKey: string): boolean {
    const derivedKey = this.deriveKey(password, storedSalt);
    return derivedKey === storedKey;
  }

}
