import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacDomainDetailComponent } from './mac-domain-detail.component';

describe('MacDomainDetailComponent', () => {
  let component: MacDomainDetailComponent;
  let fixture: ComponentFixture<MacDomainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacDomainDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacDomainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
