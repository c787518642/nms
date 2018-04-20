import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingDelayComponent } from './ping-delay.component';

describe('PingDelayComponent', () => {
  let component: PingDelayComponent;
  let fixture: ComponentFixture<PingDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
