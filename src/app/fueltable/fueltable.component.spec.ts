import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueltableComponent } from './fueltable.component';

describe('FueltableComponent', () => {
  let component: FueltableComponent;
  let fixture: ComponentFixture<FueltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FueltableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FueltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
