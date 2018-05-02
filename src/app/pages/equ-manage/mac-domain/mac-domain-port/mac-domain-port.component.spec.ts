import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDomainPortComponent } from './mac-domain-port.component';

describe('MacDomainPortComponent', () => {
  let component: MacDomainPortComponent;
  let fixture: ComponentFixture<MacDomainPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacDomainPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacDomainPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
