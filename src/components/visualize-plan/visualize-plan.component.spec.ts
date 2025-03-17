import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizePlanComponent } from './visualize-plan.component';

describe('VisualizePlanComponent', () => {
  let component: VisualizePlanComponent;
  let fixture: ComponentFixture<VisualizePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
