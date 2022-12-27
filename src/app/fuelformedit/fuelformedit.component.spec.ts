import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelformeditComponent } from './fuelformedit.component';

describe('FuelformeditComponent', () => {
  let component: FuelformeditComponent;
  let fixture: ComponentFixture<FuelformeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelformeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelformeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
