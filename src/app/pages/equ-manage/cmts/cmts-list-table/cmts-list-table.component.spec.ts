import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsListTableComponent } from './cmts-list-table.component';

describe('CmtsListTableComponent', () => {
  let component: CmtsListTableComponent;
  let fixture: ComponentFixture<CmtsListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
