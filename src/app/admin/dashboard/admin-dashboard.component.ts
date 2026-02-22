import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SermonService } from '../../core/services/api/sermon.service';
import { EventService } from '../../core/services/api/event.service';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sermonCount = 0;
  eventCount = 0;
  yearsOfMinistry = new Date().getFullYear() - 1990;

  constructor(
    private sermonService: SermonService,
    private eventService: EventService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sermonService.getAll().subscribe(s => this.sermonCount = s.length);
    this.eventService.getAll().subscribe(e => this.eventCount = e.length);
  }
}
