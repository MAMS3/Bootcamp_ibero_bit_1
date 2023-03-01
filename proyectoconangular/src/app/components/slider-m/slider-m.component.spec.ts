import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMComponent } from './slider-m.component';

describe('SliderMComponent', () => {
  let component: SliderMComponent;
  let fixture: ComponentFixture<SliderMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
