import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDomainNameComponent } from './mac-domain-name.component';

describe('MacDomainNameComponent', () => {
  let component: MacDomainNameComponent;
  let fixture: ComponentFixture<MacDomainNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacDomainNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacDomainNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
