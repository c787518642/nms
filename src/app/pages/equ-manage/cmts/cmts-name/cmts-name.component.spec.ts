import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsNameComponent } from './cmts-name.component';

describe('CmtsNameComponent', () => {
  let component: CmtsNameComponent;
  let fixture: ComponentFixture<CmtsNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
