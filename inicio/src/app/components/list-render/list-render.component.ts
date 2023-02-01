import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'dog', age: 5 },
    { name: 'Tom', type: 'Cat', age: 7 },
    { name: 'Frida', type: 'Dog', age: 6 },
    { name: 'bob', type: 'Horse', age: 8 },
  ];
  animalDetails: string = '';

  constructor(private listService: ListService) {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    console.log('Removendo Animal');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
