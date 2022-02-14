import { TestBed } from '@angular/core/testing';

import { MerchantsCategoriesService } from './merchants-categories.service';

describe('MerchantsCategoriesService', () => {
  let service: MerchantsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
