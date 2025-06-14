import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Insights Tool';
  repoUrl = '';
  repoData: any = null;
  contributors: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  fetchRepoInfo() {
    this.error = '';
    this.loading = true;
    this.repoData = null;
    this.contributors = [];

    if (!this.repoUrl.includes('github.com')) {
      this.error = 'Invalid GitHub URL';
      this.loading = false;
      return;
    }

    const encodedUrl = encodeURIComponent(this.repoUrl);

    this.http.get(`/api/github/repo?url=${encodedUrl}`).subscribe({
      next: (data) => (this.repoData = data),
      error: () => (this.error = 'Failed to fetch repo metadata'),
      complete: () => (this.loading = false)
    });

    this.http.get(`/api/github/contributors?url=${encodedUrl}`).subscribe({
      next: (data: any) => (this.contributors = data),
      error: () => (this.error = 'Failed to fetch contributors')
    });
  }
}
