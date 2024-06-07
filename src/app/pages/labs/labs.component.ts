import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'APP';
  welcome = 'Hola!';
  tasks = [
    'instalar el angualr cli',
    'instalar proyecto',
    'ejecutar proyecto'
  ]

  name = 'David';
  age = 18;
  disabled = true;
  img ='https://w3schools.com/howto/img_avatar.png';

  persona = {
    name: 'David',
    age: 18,
    avatar:'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler (){
    alert('Click')
  }

  changeHandler(event: Event) {
    console.log('evento', event);  
    
    }
    
    keydownHandler(event: KeyboardEvent){
      const input = event.target as HTMLInputElement;
    console.log('input', input.value);  

  }

}
