import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTaskFormComponent } from './enter-task-form.component';

describe('EnterTaskFormComponent', () => {
  let component: EnterTaskFormComponent;
  let fixture: ComponentFixture<EnterTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterTaskFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
