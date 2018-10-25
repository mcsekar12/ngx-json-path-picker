import { TestBed, inject } from '@angular/core/testing';

import { JsonPathPickerService } from './json-path-picker.service';

describe('JsonPathPickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPathPickerService]
    });
  });

  it('should be created', inject(
    [JsonPathPickerService],
    (service: JsonPathPickerService) => {
      expect(service).toBeTruthy();
    }
  ));
});
