import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPathPickerComponent } from './json-path-picker.component';

describe('JsonPathPickerComponent', () => {
  let component: JsonPathPickerComponent;
  let fixture: ComponentFixture<JsonPathPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPathPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPathPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
