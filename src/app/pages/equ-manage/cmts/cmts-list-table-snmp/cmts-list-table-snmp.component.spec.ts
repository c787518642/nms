import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsListTableSnmpComponent } from './cmts-list-table-snmp.component';

describe('CmtsListTableSnmpComponent', () => {
  let component: CmtsListTableSnmpComponent;
  let fixture: ComponentFixture<CmtsListTableSnmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsListTableSnmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsListTableSnmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
