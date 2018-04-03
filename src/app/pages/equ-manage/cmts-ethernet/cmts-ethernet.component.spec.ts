import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsEthernetComponent } from './cmts-ethernet.component';

describe('CmtsEthernetComponent', () => {
  let component: CmtsEthernetComponent;
  let fixture: ComponentFixture<CmtsEthernetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsEthernetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsEthernetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
