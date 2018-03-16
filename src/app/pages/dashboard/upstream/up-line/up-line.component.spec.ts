import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLineComponent } from './up-line.component';

describe('UpLineComponent', () => {
  let component: UpLineComponent;
  let fixture: ComponentFixture<UpLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
