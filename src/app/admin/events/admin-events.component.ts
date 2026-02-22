import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventService } from '../../core/services/api/event.service';
import { ChurchEvent } from '../../core/models/event.model';

@Component({
  selector: 'app-admin-events',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {
  events: ChurchEvent[] = [];
  showForm = signal(false);
  editingEvent: ChurchEvent | null = null;
  form: Omit<ChurchEvent, 'id'> = { title: '', date: '', time: '', location: '', description: '', category: '' };

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAll().subscribe(e => this.events = e);
  }

  openAddForm(): void {
    this.editingEvent = null;
    this.form = { title: '', date: '', time: '', location: '', description: '', category: '' };
    this.showForm.set(true);
  }

  openEditForm(event: ChurchEvent): void {
    this.editingEvent = event;
    this.form = { title: event.title, date: event.date, time: event.time, location: event.location, description: event.description, category: event.category };
    this.showForm.set(true);
  }

  onSubmit(): void {
    if (this.editingEvent) {
      this.eventService.update(this.editingEvent.id, this.form).subscribe(() => {
        this.loadEvents();
        this.showForm.set(false);
      });
    } else {
      this.eventService.create(this.form).subscribe(() => {
        this.loadEvents();
        this.showForm.set(false);
      });
    }
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.delete(id).subscribe(() => this.loadEvents());
    }
  }

  onCancel(): void {
    this.showForm.set(false);
  }
}
