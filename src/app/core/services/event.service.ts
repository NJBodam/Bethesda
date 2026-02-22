import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      date: '2026-03-01',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      description: 'Join us every Sunday for our weekly worship service. Come as you are and experience the presence of God through praise, worship, and the Word.',
      category: 'Worship',
      imageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800'
    },
    {
      id: 2,
      title: 'Youth Night',
      date: '2026-03-05',
      time: '6:00 PM',
      location: 'Fellowship Hall',
      description: 'A special evening for young people to connect, grow in faith, and have fun together. All teenagers and young adults are welcome.',
      category: 'Youth',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800'
    },
    {
      id: 3,
      title: 'Community Outreach Day',
      date: '2026-03-08',
      time: '9:00 AM',
      location: 'Church Parking Lot',
      description: 'We will be serving our local community by providing food, clothing, and prayer. Volunteers needed! Please sign up at the welcome desk.',
      category: 'Outreach',
      imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800'
    },
    {
      id: 4,
      title: 'Bible Study: The Book of John',
      date: '2026-03-10',
      time: '7:00 PM',
      location: 'Conference Room B',
      description: 'Dive deep into the Gospel of John with our weekly Bible study. All are welcome, whether you are new to faith or a long-time believer.',
      category: 'Bible Study',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800'
    },
    {
      id: 5,
      title: 'Women\'s Prayer Breakfast',
      date: '2026-03-14',
      time: '8:00 AM',
      location: 'Fellowship Hall',
      description: 'Ladies, join us for a morning of prayer, fellowship, and breakfast. Be refreshed and encouraged as we seek God together.',
      category: 'Prayer',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'
    },
    {
      id: 6,
      title: 'Easter Sunday Celebration',
      date: '2026-04-05',
      time: '9:00 AM & 11:00 AM',
      location: 'Main Sanctuary',
      description: 'Celebrate the resurrection of our Lord Jesus Christ with two special services. Invite family and friends to join this joyous occasion.',
      category: 'Special Service',
      imageUrl: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800'
    }
  ];

  getUpcomingEvents(): Observable<Event[]> {
    const today = new Date().toISOString().split('T')[0];
    const upcoming = this.events.filter(e => e.date >= today);
    return of(upcoming);
  }

  getEventById(id: number): Observable<Event | undefined> {
    return of(this.events.find(e => e.id === id));
  }
}
