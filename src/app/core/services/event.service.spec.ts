import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';
import { firstValueFrom } from 'rxjs';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return upcoming events', async () => {
    const events = await firstValueFrom(service.getUpcomingEvents());
    expect(Array.isArray(events)).toBeTruthy();
  });

  it('should return event by id', async () => {
    const event = await firstValueFrom(service.getEventById(1));
    expect(event).toBeDefined();
    expect(event?.id).toBe(1);
  });

  it('should return undefined for non-existent event id', async () => {
    const event = await firstValueFrom(service.getEventById(9999));
    expect(event).toBeUndefined();
  });
});
