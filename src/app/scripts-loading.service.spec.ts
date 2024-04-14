import { TestBed } from '@angular/core/testing';

import { ScriptsLoadingService } from './scripts-loading.service';

describe('ScriptsLoadingService', () => {
  let service: ScriptsLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptsLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
