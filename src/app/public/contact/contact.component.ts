import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: ContactForm = { name: '', email: '', phone: '', subject: '', message: '' };
  submitted = signal(false);

  onSubmit(): void {
    this.submitted.set(true);
    this.form = { name: '', email: '', phone: '', subject: '', message: '' };
    setTimeout(() => this.submitted.set(false), 5000);
  }
}
