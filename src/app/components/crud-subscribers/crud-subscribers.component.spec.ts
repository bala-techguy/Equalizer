import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSubscribersComponent } from './crud-subscribers.component';

describe('CrudSubscribersComponent', () => {
  let component: CrudSubscribersComponent;
  let fixture: ComponentFixture<CrudSubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudSubscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
