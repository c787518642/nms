import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsTableComponent } from './cmts-table.component';

describe('CmtsTableComponent', () => {
  let component: CmtsTableComponent;
  let fixture: ComponentFixture<CmtsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
