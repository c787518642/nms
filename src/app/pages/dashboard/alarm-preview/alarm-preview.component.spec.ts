import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmPreviewComponent } from './alarm-preview.component';

describe('AlarmPreviewComponent', () => {
  let component: AlarmPreviewComponent;
  let fixture: ComponentFixture<AlarmPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
