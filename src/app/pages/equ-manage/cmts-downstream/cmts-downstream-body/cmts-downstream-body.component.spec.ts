import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsDownstreamBodyComponent } from './cmts-downstream-body.component';

describe('CmtsDownstreamBodyComponent', () => {
  let component: CmtsDownstreamBodyComponent;
  let fixture: ComponentFixture<CmtsDownstreamBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsDownstreamBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsDownstreamBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
