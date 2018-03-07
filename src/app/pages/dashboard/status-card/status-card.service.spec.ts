import { TestBed, inject } from '@angular/core/testing';

import { StatusCardService } from './status-card.service';

describe('StatusCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusCardService]
    });
  });

  it('should be created', inject([StatusCardService], (service: StatusCardService) => {
    expect(service).toBeTruthy();
  }));
});
