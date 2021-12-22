import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Ebert';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  btnDisabled: boolean = true;

  names: string[] = ['Julian', 'Nicolas', 'Ebert'];

  newName: string = '';

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  person = {
    name: 'Ebert',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  increaseAge() {
    this.person.age++;
  }
  restAge() {
    this.person.age--;
  }

  onScroll(event: Event) {
    // console.log('event ', event.target);
    const element = event.target as HTMLElement;
    console.log('element ', element.scrollTop);
  }

  changeName(event: Event) {
    // console.log('event ',event.target);
    const element = event.target as HTMLInputElement;
    // console.log('evento ', element.value);
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(indice: number) {
    this.names.splice(indice, 1);
  }
}
