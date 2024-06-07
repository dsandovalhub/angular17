import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
 /*  title = 'APP';
  welcome = 'HOOOLA';
  tasks = [
    'instalar el angualr cli',
    'instalar proyecto',
    'ejecutar proyecto'
  ] */ 
}
