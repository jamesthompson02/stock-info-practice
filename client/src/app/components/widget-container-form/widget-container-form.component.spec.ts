import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContainerFormComponent } from './widget-container-form.component';

describe('WidgetContainerFormComponent', () => {
  let component: WidgetContainerFormComponent;
  let fixture: ComponentFixture<WidgetContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetContainerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
