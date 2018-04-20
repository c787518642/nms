import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsNpaComponent } from './cmts-npa.component';

describe('CmtsNpaComponent', () => {
  let component: CmtsNpaComponent;
  let fixture: ComponentFixture<CmtsNpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsNpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsNpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
