import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsMacComponent } from './cmts-mac.component';

describe('CmtsMacComponent', () => {
  let component: CmtsMacComponent;
  let fixture: ComponentFixture<CmtsMacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsMacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
