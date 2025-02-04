import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAndPaymentsComponent } from './date-and-payments.component';

describe('DateAndPaymentsComponent', () => {
  let component: DateAndPaymentsComponent;
  let fixture: ComponentFixture<DateAndPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAndPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateAndPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
