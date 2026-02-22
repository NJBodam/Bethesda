import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SermonService } from '../../core/services/api/sermon.service';
import { Sermon } from '../../core/models/sermon.model';

@Component({
  selector: 'app-admin-sermons',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-sermons.component.html',
  styleUrls: ['./admin-sermons.component.scss']
})
export class AdminSermonsComponent implements OnInit {
  sermons: Sermon[] = [];
  showForm = signal(false);
  editingSermon: Sermon | null = null;
  form: Omit<Sermon, 'id'> = { title: '', speaker: '', date: '', description: '', scripture: '', series: '' };

  constructor(private sermonService: SermonService) {}

  ngOnInit(): void {
    this.loadSermons();
  }

  loadSermons(): void {
    this.sermonService.getAll().subscribe(s => this.sermons = s);
  }

  openAddForm(): void {
    this.editingSermon = null;
    this.form = { title: '', speaker: '', date: '', description: '', scripture: '', series: '' };
    this.showForm.set(true);
  }

  openEditForm(sermon: Sermon): void {
    this.editingSermon = sermon;
    this.form = { title: sermon.title, speaker: sermon.speaker, date: sermon.date, description: sermon.description, scripture: sermon.scripture, series: sermon.series };
    this.showForm.set(true);
  }

  onSubmit(): void {
    if (this.editingSermon) {
      this.sermonService.update(this.editingSermon.id, this.form).subscribe(() => {
        this.loadSermons();
        this.showForm.set(false);
      });
    } else {
      this.sermonService.create(this.form).subscribe(() => {
        this.loadSermons();
        this.showForm.set(false);
      });
    }
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this sermon?')) {
      this.sermonService.delete(id).subscribe(() => this.loadSermons());
    }
  }

  onCancel(): void {
    this.showForm.set(false);
  }
}
