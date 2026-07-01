import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../../services/api';

@Component({
  selector: 'app-error',
  imports: [CommonModule],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error implements OnInit {
  Results: any[] = [];
  errorMessage: string = '';
   error = signal<string | null>(null);

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getusers().subscribe({
      next: (data) => {
        this.Results = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Failed to load data. Please try again later.';
        this.error.set(this.errorMessage);
      
      },
    });
  }
}