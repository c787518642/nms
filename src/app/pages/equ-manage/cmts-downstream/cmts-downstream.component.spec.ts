import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsDownstreamComponent } from './cmts-downstream.component';

describe('CmtsDownstreamComponent', () => {
  let component: CmtsDownstreamComponent;
  let fixture: ComponentFixture<CmtsDownstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsDownstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsDownstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
