import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDomainComponent } from './mac-domain.component';

describe('MacDomainComponent', () => {
  let component: MacDomainComponent;
  let fixture: ComponentFixture<MacDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
