import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponentComponent } from './general-component.component';

describe('GeneralComponentComponent', () => {
  let component: GeneralComponentComponent;
  let fixture: ComponentFixture<GeneralComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
