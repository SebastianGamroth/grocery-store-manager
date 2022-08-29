import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalkboardPlannerComponent } from './chalkboard-planner.component';

describe('ChalkboardPlannerComponent', () => {
  let component: ChalkboardPlannerComponent;
  let fixture: ComponentFixture<ChalkboardPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChalkboardPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChalkboardPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
