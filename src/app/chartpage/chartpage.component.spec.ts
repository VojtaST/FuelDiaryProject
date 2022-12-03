import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpageComponent } from './chartpage.component';

describe('ChartpageComponent', () => {
  let component: ChartpageComponent;
  let fixture: ComponentFixture<ChartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
