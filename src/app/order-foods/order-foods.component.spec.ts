import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFoodsComponent } from './order-foods.component';

describe('OrderFoodsComponent', () => {
  let component: OrderFoodsComponent;
  let fixture: ComponentFixture<OrderFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
