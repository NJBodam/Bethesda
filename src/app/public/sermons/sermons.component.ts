import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SermonService } from '../../core/services/api/sermon.service';
import { Sermon } from '../../core/models/sermon.model';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
    selector: 'app-sermons',
    imports: [CommonModule, CardComponent],
    templateUrl: './sermons.component.html',
    styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnInit {
  sermons: Sermon[] = [];
  filteredSermons: Sermon[] = [];
  searchTerm = '';

  constructor(private sermonService: SermonService) {}

  ngOnInit(): void {
    this.sermonService.getAll().subscribe(s => {
      this.sermons = s;
      this.filteredSermons = s;
    });
  }

  onSearch(event: Event): void {
    const term = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchTerm = term;
    this.filteredSermons = this.sermons.filter(s =>
      s.title.toLowerCase().includes(term) ||
      s.speaker.toLowerCase().includes(term) ||
      (s.series?.toLowerCase().includes(term) ?? false)
    );
  }
}
