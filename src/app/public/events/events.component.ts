import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../core/services/api/event.service';
import { ChurchEvent } from '../../core/models/event.model';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
    selector: 'app-events',
    imports: [CommonModule, CardComponent],
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: ChurchEvent[] = [];
  filteredEvents: ChurchEvent[] = [];
  selectedCategory = 'All';
  categories: string[] = ['All'];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAll().subscribe(events => {
      this.events = events;
      this.filteredEvents = events;
      const cats = [...new Set(events.map(e => e.category))];
      this.categories = ['All', ...cats];
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredEvents = category === 'All'
      ? this.events
      : this.events.filter(e => e.category === category);
  }
}
