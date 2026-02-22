import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    imports: [CommonModule, RouterLink],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  leadership = [
    { name: 'Pastor John Doe', role: 'Senior Pastor', bio: 'Pastor John has been serving at Bethesda for over 15 years.' },
    { name: 'Pastor Jane Smith', role: 'Associate Pastor', bio: 'Pastor Jane leads our women\'s ministry and counseling.' },
    { name: 'Elder Mark Johnson', role: 'Elder', bio: 'Elder Mark oversees church operations and outreach.' }
  ];
}
