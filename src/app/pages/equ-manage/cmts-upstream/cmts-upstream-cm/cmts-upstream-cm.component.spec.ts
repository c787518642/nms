import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsUpstreamCmComponent } from './cmts-upstream-cm.component';

describe('CmtsUpstreamCmComponent', () => {
  let component: CmtsUpstreamCmComponent;
  let fixture: ComponentFixture<CmtsUpstreamCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsUpstreamCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsUpstreamCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
