import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComplaintsComponent } from './crud-complaints.component';

describe('CrudComplaintsComponent', () => {
  let component: CrudComplaintsComponent;
  let fixture: ComponentFixture<CrudComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
