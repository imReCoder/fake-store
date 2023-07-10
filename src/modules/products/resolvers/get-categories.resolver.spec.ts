import { TestBed } from '@angular/core/testing';

import { GetCategoriesResolver } from './get-categories.resolver';

describe('GetCategoriesResolver', () => {
  let resolver: GetCategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetCategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
