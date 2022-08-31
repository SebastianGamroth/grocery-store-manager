import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartInfoComponent } from './start-info.component';

describe('StartInfoComponent', () => {
  let component: StartInfoComponent;
  let fixture: ComponentFixture<StartInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
