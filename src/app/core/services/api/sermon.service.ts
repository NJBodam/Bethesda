import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sermon } from '../../models/sermon.model';

@Injectable({ providedIn: 'root' })
export class SermonService {
  private sermons: Sermon[] = [
    {
      id: '1',
      title: 'Walking in Faith',
      speaker: 'Pastor John Doe',
      date: '2024-01-07',
      description: 'A powerful message about trusting God in every circumstance.',
      scripture: 'Hebrews 11:1-6',
      series: 'Faith Series'
    },
    {
      id: '2',
      title: 'The Grace of God',
      speaker: 'Pastor John Doe',
      date: '2024-01-14',
      description: 'Exploring the depths of God\'s amazing grace and its transforming power.',
      scripture: 'Ephesians 2:1-10',
      series: 'Grace Series'
    },
    {
      id: '3',
      title: 'Love One Another',
      speaker: 'Pastor Jane Smith',
      date: '2024-01-21',
      description: 'Understanding the commandment to love as Christ loved us.',
      scripture: 'John 13:34-35',
      series: 'Love Series'
    }
  ];

  getAll(): Observable<Sermon[]> {
    return of(this.sermons);
  }

  getById(id: string): Observable<Sermon | undefined> {
    return of(this.sermons.find(s => s.id === id));
  }

  create(sermon: Omit<Sermon, 'id'>): Observable<Sermon> {
    const newSermon: Sermon = { ...sermon, id: Date.now().toString() };
    this.sermons.push(newSermon);
    return of(newSermon);
  }

  update(id: string, sermon: Partial<Sermon>): Observable<Sermon | undefined> {
    const index = this.sermons.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sermons[index] = { ...this.sermons[index], ...sermon };
      return of(this.sermons[index]);
    }
    return of(undefined);
  }

  delete(id: string): Observable<boolean> {
    const index = this.sermons.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sermons.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
