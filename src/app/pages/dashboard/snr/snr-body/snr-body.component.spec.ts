import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnrBodyComponent } from './snr-body.component';

describe('SnrBodyComponent', () => {
  let component: SnrBodyComponent;
  let fixture: ComponentFixture<SnrBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnrBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnrBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
