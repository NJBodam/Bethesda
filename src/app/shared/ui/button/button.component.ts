import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="'btn btn-' + variant"
      [disabled]="disabled"
      (click)="clicked.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .btn {
      padding: 0.6rem 1.4rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: background 0.2s, transform 0.1s;

      &:hover { transform: translateY(-1px); }
      &:disabled { opacity: 0.6; cursor: not-allowed; }
    }
    .btn-primary { background: #1a237e; color: white; &:hover { background: #283593; } }
    .btn-secondary { background: #ffd700; color: #1a237e; &:hover { background: #ffca28; } }
    .btn-danger { background: #c62828; color: white; &:hover { background: #b71c1c; } }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<Event>();
}
