import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentLandingComponent } from './experiment-landing.component';

describe('ExperimentLandingComponent', () => {
  let component: ExperimentLandingComponent;
  let fixture: ComponentFixture<ExperimentLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
