import { TestBed, inject } from '@angular/core/testing';

import { MenulistService } from './menulist.service';

describe('MenulistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenulistService]
    });
  });

  it('should be created', inject([MenulistService], (service: MenulistService) => {
    expect(service).toBeTruthy();
  }));
});
