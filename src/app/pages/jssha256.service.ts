import { Injectable } from '@angular/core';
import * as sha256 from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class Jssha256Service {

  constructor() { }

  hashPassword(password: string, salt: string): string {
    const saltedPassword = password + salt;
    return sha256.sha256(saltedPassword);
  }

  generateSalt(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let salt = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      salt += charset[randomIndex];
    }
    return salt;
  }
}
