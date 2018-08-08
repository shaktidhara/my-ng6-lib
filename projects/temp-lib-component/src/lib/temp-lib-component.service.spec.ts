import { TestBed, inject } from '@angular/core/testing';

import { TempLibComponentService } from './temp-lib-component.service';

describe('TempLibComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempLibComponentService]
    });
  });

  it('should be created', inject([TempLibComponentService], (service: TempLibComponentService) => {
    expect(service).toBeTruthy();
  }));
});
