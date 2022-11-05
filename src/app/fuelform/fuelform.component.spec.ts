import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelformComponent } from './fuelform.component';

describe('FuelformComponent', () => {
  let component: FuelformComponent;
  let fixture: ComponentFixture<FuelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
