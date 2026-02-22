import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChurchEvent } from '../../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: ChurchEvent[] = [
    {
      id: '1',
      title: 'Sunday Worship Service',
      date: '2024-02-04',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      description: 'Join us for our weekly Sunday worship service with praise, prayer, and the Word.',
      category: 'Worship'
    },
    {
      id: '2',
      title: 'Youth Night',
      date: '2024-02-09',
      time: '6:00 PM',
      location: 'Youth Hall',
      description: 'A fun and impactful evening for teens and young adults.',
      category: 'Youth'
    },
    {
      id: '3',
      title: 'Community Outreach',
      date: '2024-02-17',
      time: '9:00 AM',
      location: 'Community Center',
      description: 'Serving our local community with food, clothing, and prayer.',
      category: 'Outreach'
    }
  ];

  getAll(): Observable<ChurchEvent[]> {
    return of(this.events);
  }

  getById(id: string): Observable<ChurchEvent | undefined> {
    return of(this.events.find(e => e.id === id));
  }

  create(event: Omit<ChurchEvent, 'id'>): Observable<ChurchEvent> {
    const newEvent: ChurchEvent = { ...event, id: Date.now().toString() };
    this.events.push(newEvent);
    return of(newEvent);
  }

  update(id: string, event: Partial<ChurchEvent>): Observable<ChurchEvent | undefined> {
    const index = this.events.findIndex(e => e.id === id);
    if (index !== -1) {
      this.events[index] = { ...this.events[index], ...event };
      return of(this.events[index]);
    }
    return of(undefined);
  }

  delete(id: string): Observable<boolean> {
    const index = this.events.findIndex(e => e.id === id);
    if (index !== -1) {
      this.events.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
