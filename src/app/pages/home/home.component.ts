import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },    
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    }   
  ]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTasks = input.value;
    /* antes de actulizar vemos el estado anterior
    no muta crear un nuevo estado, clonamos los elementos anteriores
    y se agrega el nuevo al final de la lsita UPDATE */
    this.addTask(newTasks);
    input.value = '';
  }
  
  addTask(title: string){
    const newTasks = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTasks]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((valor_elem,index_array,tasks) => index_array !== index));
    
  }

  deleteTask2(index: number) {        
    this.tasks.set(
         this.tasks()
         .filter((_, position) =>  position != index));

  }

  updateTask(index: number) {
    this.tasks.update((tasks)=>{
      return tasks.map((task, position)=>{
        if(position === index){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })

  }

  toggleChecked(task: Task) {
    console.log('task', task);
    
    this.tasks.update((value) =>
      value.map((item) => {
        if (item.id == task.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }

}
