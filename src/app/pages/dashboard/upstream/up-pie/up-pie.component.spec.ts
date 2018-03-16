import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPieComponent } from './up-pie.component';

describe('UpPieComponent', () => {
  let component: UpPieComponent;
  let fixture: ComponentFixture<UpPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
