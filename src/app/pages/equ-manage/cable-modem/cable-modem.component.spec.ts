import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableModemComponent } from './cable-modem.component';

describe('CableModemComponent', () => {
  let component: CableModemComponent;
  let fixture: ComponentFixture<CableModemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableModemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableModemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
