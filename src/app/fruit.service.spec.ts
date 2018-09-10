import { TestBed, inject } from '@angular/core/testing';

import { FruitService } from './fruit.service';

describe('FruitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitService]
    });
  });

  it('should be created', inject([FruitService], (service: FruitService) => {
    expect(service).toBeTruthy();
  }));
});
