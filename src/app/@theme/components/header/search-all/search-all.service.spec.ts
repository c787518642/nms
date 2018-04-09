import { TestBed, inject } from '@angular/core/testing';

import { SearchAllService } from './search-all.service';

describe('SearchAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAllService]
    });
  });

  it('should be created', inject([SearchAllService], (service: SearchAllService) => {
    expect(service).toBeTruthy();
  }));
});
