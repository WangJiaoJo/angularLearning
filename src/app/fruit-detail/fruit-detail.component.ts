import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Fruit } from '../fruit';
import { FruitService} from '../fruit.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {
  fruit: Fruit;

  constructor(
    private route: ActivatedRoute,
    private fruitService: FruitService
  ) { }

  ngOnInit(): void {
    this.getFruit();
  }

  getFruit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fruitService.getFruit(id)
      .subscribe(fruit => this.fruit = fruit);
  }
}
