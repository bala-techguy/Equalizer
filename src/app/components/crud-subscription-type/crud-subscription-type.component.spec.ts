import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSubscriptionTypeComponent } from './crud-subscription-type.component';

describe('CrudSubscriptionTypeComponent', () => {
  let component: CrudSubscriptionTypeComponent;
  let fixture: ComponentFixture<CrudSubscriptionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudSubscriptionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSubscriptionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
