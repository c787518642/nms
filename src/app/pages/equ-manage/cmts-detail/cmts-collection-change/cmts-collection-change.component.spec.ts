import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtsCollectionChangeComponent } from './cmts-collection-change.component';

describe('CmtsCollectionChangeComponent', () => {
  let component: CmtsCollectionChangeComponent;
  let fixture: ComponentFixture<CmtsCollectionChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmtsCollectionChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtsCollectionChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
