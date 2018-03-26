import { TestBed, inject } from '@angular/core/testing';

import { CmtsService } from './cmts.service';

describe('CmtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmtsService]
    });
  });

  it('should be created', inject([CmtsService], (service: CmtsService) => {
    expect(service).toBeTruthy();
  }));
});
