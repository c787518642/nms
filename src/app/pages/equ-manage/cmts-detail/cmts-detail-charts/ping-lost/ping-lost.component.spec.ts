import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingLostComponent } from './ping-lost.component';

describe('PingLostComponent', () => {
  let component: PingLostComponent;
  let fixture: ComponentFixture<PingLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
