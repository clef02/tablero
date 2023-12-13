/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RelogService } from './relog.service';

describe('Service: Relog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelogService]
    });
  });

  it('should ...', inject([RelogService], (service: RelogService) => {
    expect(service).toBeTruthy();
  }));
});
