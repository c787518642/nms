import { TestBed, inject } from '@angular/core/testing';

import { DetailChartsService } from './detail-charts.service';

describe('DetailChartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailChartsService]
    });
  });

  it('should be created', inject([DetailChartsService], (service: DetailChartsService) => {
    expect(service).toBeTruthy();
  }));
});
