import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsUpstreamBodyComponent } from './cmts-upstream-body.component';

describe('CmtsUpstreamBodyComponent', () => {
  let component: CmtsUpstreamBodyComponent;
  let fixture: ComponentFixture<CmtsUpstreamBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsUpstreamBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsUpstreamBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
