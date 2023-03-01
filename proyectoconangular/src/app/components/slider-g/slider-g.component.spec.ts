import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGComponent } from './slider-g.component';

describe('SliderGComponent', () => {
  let component: SliderGComponent;
  let fixture: ComponentFixture<SliderGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
