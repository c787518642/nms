import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnrComponent } from './snr.component';

describe('SnrComponent', () => {
  let component: SnrComponent;
  let fixture: ComponentFixture<SnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
