import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  showUserInput = false;
  clickMessage = '';
  values = '';
  values2 = '';
  value = '';
  value2 = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { }

  ngOnInit() {
  }

  onClickMe = () => {
    this.clickMessage = 'I am the click message';
  }

  onKey = (event: any) => {
    this.values += event.target.value + ' | ';
  }

  onKey2 = (value: string) => {
    this.values2 += value + ' | ';
  }

  onEnter = (value: string) => {
    this.value = value;
  }

  update = (value: string) => {
    this.value2 = value;
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
