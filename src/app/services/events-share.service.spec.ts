import { TestBed } from '@angular/core/testing';

import { EventsShareService } from './events-share.service';

describe('EventsShareService', () => {
  let service: EventsShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
