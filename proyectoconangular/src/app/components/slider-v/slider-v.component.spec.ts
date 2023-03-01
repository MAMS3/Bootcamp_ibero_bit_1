import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderVComponent } from './slider-v.component';

describe('SliderVComponent', () => {
  let component: SliderVComponent;
  let fixture: ComponentFixture<SliderVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
