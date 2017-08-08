import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProjectsComponent } from './slider-projects.component';

describe('SliderProjectsComponent', () => {
  let component: SliderProjectsComponent;
  let fixture: ComponentFixture<SliderProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
