import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmOnlineComponent } from './cm-online.component';

describe('CmOnlineComponent', () => {
  let component: CmOnlineComponent;
  let fixture: ComponentFixture<CmOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
