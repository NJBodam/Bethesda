import { Routes } from '@angular/router';
import { EventsListComponent } from './public/events/events-list/events-list.component';
import { EventDetailComponent } from './public/events/event-detail/event-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailComponent }
];
