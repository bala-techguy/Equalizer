import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyUserComponent } from './loyalty-user.component';

describe('LoyaltyUserComponent', () => {
  let component: LoyaltyUserComponent;
  let fixture: ComponentFixture<LoyaltyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
