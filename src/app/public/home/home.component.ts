import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SermonService } from '../../core/services/api/sermon.service';
import { EventService } from '../../core/services/api/event.service';
import { Sermon } from '../../core/models/sermon.model';
import { ChurchEvent } from '../../core/models/event.model';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestSermons: Sermon[] = [];
  upcomingEvents: ChurchEvent[] = [];

  constructor(
    private sermonService: SermonService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.sermonService.getAll().subscribe(s => this.latestSermons = s.slice(0, 3));
    this.eventService.getAll().subscribe(e => this.upcomingEvents = e.slice(0, 3));
  }
}
