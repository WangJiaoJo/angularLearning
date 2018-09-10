import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fruit } from './fruit';
import { FRUITS } from './mock-fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(FRUITS);
  }

  getFruit(id: number): Observable<Fruit> {
    const fruit = FRUITS.filter((fruit) => fruit.id === id);
    return of(fruit[0]);
  }
}
