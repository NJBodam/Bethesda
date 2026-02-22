import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./public/home/home.component').then(m => m.HomeComponent) },
  { path: 'sermons', loadComponent: () => import('./public/sermons/sermons.component').then(m => m.SermonsComponent) },
  { path: 'events', loadComponent: () => import('./public/events/events.component').then(m => m.EventsComponent) },
  { path: 'about', loadComponent: () => import('./public/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./public/contact/contact.component').then(m => m.ContactComponent) },
  {
    path: 'admin',
    children: [
      { path: 'login', loadComponent: () => import('./admin/auth/admin-login.component').then(m => m.AdminLoginComponent) },
      { path: 'dashboard', loadComponent: () => import('./admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent), canActivate: [authGuard] },
      { path: 'sermons', loadComponent: () => import('./admin/sermons/admin-sermons.component').then(m => m.AdminSermonsComponent), canActivate: [authGuard] },
      { path: 'events', loadComponent: () => import('./admin/events/admin-events.component').then(m => m.AdminEventsComponent), canActivate: [authGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

// import { EventsListComponent } from './public/events/events-list/events-list.component';
// import { EventDetailComponent } from './public/events/event-detail/event-detail.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '/events', pathMatch: 'full' },
//   { path: 'events', component: EventsListComponent },
//   { path: 'events/:id', component: EventDetailComponent }