import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquManageComponent } from './equ-manage.component';

describe('EquManageComponent', () => {
  let component: EquManageComponent;
  let fixture: ComponentFixture<EquManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
