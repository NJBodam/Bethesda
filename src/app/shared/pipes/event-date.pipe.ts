import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventDate',
  standalone: true
})
export class EventDatePipe implements PipeTransform {
  transform(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
