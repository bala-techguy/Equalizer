import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLoyaltyUserComponent } from './crud-loyalty-user.component';

describe('CrudLoyaltyUserComponent', () => {
  let component: CrudLoyaltyUserComponent;
  let fixture: ComponentFixture<CrudLoyaltyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudLoyaltyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLoyaltyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
