import { Component } from '@angular/core';

@Component({
  selector: 'app-pbkdf2',
  standalone: true,
  imports: [],
  templateUrl: './pbkdf2.component.html',
  styleUrl: './pbkdf2.component.css'
})
export class Pbkdf2Component {

  password='abcd1234'
  salt = '16'
  iterations = 65536;
  hash ='SHA-256'

  constructor(){
    this.deriveAKey(this.password,this.salt,this.iterations,this.hash);
  }

    deriveAKey(password:any, salt:any, iterations:any, hash:any) {    
    
        // First, create a PBKDF2 "key" containing the password
        window.crypto.subtle.importKey(
            "raw",
            this.stringToArrayBuffer(password),
            {"name": "PBKDF2"},
            false,
            ["deriveKey"]).
        then(function(baseKey){
        var byteArray = new Uint8Array(salt.length);
        for(var i=0; i < salt.length; i++) {
            byteArray[i] = salt.codePointAt(i);
        }
            // Derive a key from the password
            return window.crypto.subtle.deriveKey(
                {
                    "name": "PBKDF2",
                    "salt": byteArray,
                    "iterations": iterations,
                    "hash": hash
                },
                baseKey,
                {"name": "AES-CBC", "length": 128}, // Key we want.Can be any AES algorithm ("AES-CTR", "AES-CBC", "AES-CMAC", "AES-GCM", "AES-CFB", "AES-KW", "ECDH", "DH", or "HMAC")
                true,                               // Extractable
                ["encrypt", "decrypt"]              // For new key
                );
        }).then(function(aesKey) {
            // Export it so we can display it
            return window.crypto.subtle.exportKey("raw", aesKey);
        }).then(function(keyBytes) {
        var byteArray = new Uint8Array(keyBytes);
        var byteString = '';
        for(var i=0; i < byteArray.byteLength; i++) {
            byteString += String.fromCodePoint(byteArray[i]);
        }
            // Display key in Base64 format
            var keyS = byteString;
            var keyB64 = btoa (keyS);
            console.log('***********: ',keyB64);
        }).catch(function(err) {
            alert("Key derivation failed: " + err.message);
        });
    }
 
//Utility functions
 
    stringToArrayBuffer(byteString: any){
        var byteArray = new Uint8Array(byteString.length);
        for(var i=0; i < byteString.length; i++) {
            byteArray[i] = byteString.codePointAt(i);
        }
        console.log('byte arr:' + byteArray)
        return byteArray;
    }
 
    arrayBufferToString(buffer: any){
        var byteArray = new Uint8Array(buffer);
        var byteString = '';
        for(var i=0; i < byteArray.byteLength; i++) {
            byteString += String.fromCodePoint(byteArray[i]);
        }
        return byteString;
    }

}
