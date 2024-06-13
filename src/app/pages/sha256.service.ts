import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class Sha256Service {

  constructor() { }

  hashWithSalt(password: string, salt: string): string {
    const saltedPassword = password + salt;
    console.log('2.saltedPassword',saltedPassword );

    const hash = crypto.SHA256(saltedPassword);
   // console.log('3.hash',hash );    
    console.log('4.hash',hash.toString(crypto.enc.Hex) );    
    //return hash.toString(crypto.enc.Hex);
    return hash.toString(crypto.enc.Hex);
  }

  generateSalt(length: number): string {
    console.log('1. generateSalt_RAND', crypto.lib.WordArray.random(length).toString());
    
    return crypto.lib.WordArray.random(length).toString();
   //return '';
  }
}
