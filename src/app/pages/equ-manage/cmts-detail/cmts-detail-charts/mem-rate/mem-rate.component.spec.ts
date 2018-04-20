import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemRateComponent } from './mem-rate.component';

describe('MemRateComponent', () => {
  let component: MemRateComponent;
  let fixture: ComponentFixture<MemRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
