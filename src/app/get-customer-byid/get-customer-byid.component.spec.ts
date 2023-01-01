import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerByidComponent } from './get-customer-byid.component';

describe('GetCustomerByidComponent', () => {
  let component: GetCustomerByidComponent;
  let fixture: ComponentFixture<GetCustomerByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerByidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
