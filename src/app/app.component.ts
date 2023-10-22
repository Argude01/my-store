import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgWidth = 20;
  name = 'Auxi';
  age = 26;
  img = 'https://angular.io/assets/images/logos/angular/angular.png';
  sendButtonDisabled = true;
  person = {
    name: 'Maria',
    age: 25,
    avatar: 'https://angular.io/assets/images/logos/angular/angular.png',
    search: 'Type something...',
    email: '',
    password: '',
    nickname: ''
  };
  names: string[] = ['Maria', 'Pedro', 'Juan', 'Ana', 'Luis'];
  newName = '';
  products: Product[] = [
    {
      name: 'PS5',
      image: './assets/images/album.jpg',
      price: 500
    },
    {
      name: 'Xbox Series X',
      image: './assets/images/house.jpg',
      price: 500,
      stock: 0
    },
    {
      name: 'Nintendo Switch',
      image: './assets/images/books.jpg',
      price: 300,
      stock: 5
    },
    {
      name: 'PS5',
      image: './assets/images/album.jpg',
      price: 500
    },
    {
      name: 'Xbox Series X',
      image: './assets/images/house.jpg',
      price: 500,
      stock: 0
    },
    {
      name: 'Nintendo Switch',
      image: './assets/images/books.jpg',
      price: 300,
      stock: 5
    }
  ];

  send() {
    console.log('send');
    this.sendButtonDisabled = !this.sendButtonDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onTyping(event: Event) {
    const input = event.target as HTMLInputElement;
    this.person.search = input.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
