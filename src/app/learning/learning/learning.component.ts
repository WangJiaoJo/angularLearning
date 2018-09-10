import { Component, OnInit } from '@angular/core';

import { Topic } from '../topic';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  topics: Topic[];

  constructor() { }

  ngOnInit() {
    this.topics = [{ name: 'Architecture' }];
  }

}
