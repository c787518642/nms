import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsFlowComponent } from './cmts-flow.component';

describe('CmtsFlowComponent', () => {
  let component: CmtsFlowComponent;
  let fixture: ComponentFixture<CmtsFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
