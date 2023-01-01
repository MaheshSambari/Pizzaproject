import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpizzaAscComponent } from './getpizza-asc.component';

describe('GetpizzaAscComponent', () => {
  let component: GetpizzaAscComponent;
  let fixture: ComponentFixture<GetpizzaAscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpizzaAscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpizzaAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
