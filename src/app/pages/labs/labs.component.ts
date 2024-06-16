import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


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
  tasks = signal([
    'instalar el angualr cli',
    'instalar proyecto',
    'ejecutar proyecto'
  ]);

  //va a tener reatividade granular
  name = signal('David'); 
  age = 19;
  disabled = true;
  img ='https://w3schools.com/howto/img_avatar.png';

  persona =signal({
    name: 'David',
    age: 11,
    avatar:'https://w3schools.com/howto/img_avatar.png'
  })

  clickHandler (){
    alert('Click!!!!!!!')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;    
    const newValue = input.value;
    this.name.set(newValue)    
    console.log('newValue', newValue);  
    
  }
    
  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log('evento 2:', input.value);
  }

  changeAge(event: Event){
    const input = event.target as HTMLInputElement;    
    const newValue = input.value;
    this.persona.update(personaAnt =>{
      return {
        ...personaAnt,
        age: parseInt(newValue)
      }
    })

  }

}
