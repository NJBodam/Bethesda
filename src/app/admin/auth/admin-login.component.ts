import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
    selector: 'app-admin-login',
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  username = '';
  password = '';
  error = signal('');

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.error.set('Invalid username or password.');
      setTimeout(() => this.error.set(''), 3000);
    }
  }
}
