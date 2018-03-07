import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsComponent } from './cmts.component';

describe('CmtsComponent', () => {
  let component: CmtsComponent;
  let fixture: ComponentFixture<CmtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
