import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsDetailComponent } from './cmts-detail.component';

describe('CmtsDetailComponent', () => {
  let component: CmtsDetailComponent;
  let fixture: ComponentFixture<CmtsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
