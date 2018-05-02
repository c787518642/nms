import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDomainCmComponent } from './mac-domain-cm.component';

describe('MacDomainCmComponent', () => {
  let component: MacDomainCmComponent;
  let fixture: ComponentFixture<MacDomainCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacDomainCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacDomainCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
