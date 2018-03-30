import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsUpstreamComponent } from './cmts-upstream.component';

describe('CmtsUpstreamComponent', () => {
  let component: CmtsUpstreamComponent;
  let fixture: ComponentFixture<CmtsUpstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsUpstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsUpstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
