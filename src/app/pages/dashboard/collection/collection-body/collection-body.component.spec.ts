import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionBodyComponent } from './collection-body.component';

describe('CollectionBodyComponent', () => {
  let component: CollectionBodyComponent;
  let fixture: ComponentFixture<CollectionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
