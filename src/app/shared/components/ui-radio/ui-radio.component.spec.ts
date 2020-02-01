import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRadioComponent } from './ui-radio.component';

describe('UiRadioComponent', () => {
  let component: UiRadioComponent;
  let fixture: ComponentFixture<UiRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
