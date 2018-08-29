import { TestBed, inject } from '@angular/core/testing';

import { TutoleappService } from './tutoleapp.service';

describe('TutoleappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutoleappService]
    });
  });

  it('should be created', inject([TutoleappService], (service: TutoleappService) => {
    expect(service).toBeTruthy();
  }));
});
