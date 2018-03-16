import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnrLineComponent } from './snr-line.component';

describe('SnrLineComponent', () => {
  let component: SnrLineComponent;
  let fixture: ComponentFixture<SnrLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnrLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnrLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
