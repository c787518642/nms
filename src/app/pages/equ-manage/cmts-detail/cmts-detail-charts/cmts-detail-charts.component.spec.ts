import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsDetailChartsComponent } from './cmts-detail-charts.component';

describe('CmtsDetailChartsComponent', () => {
  let component: CmtsDetailChartsComponent;
  let fixture: ComponentFixture<CmtsDetailChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsDetailChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsDetailChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
