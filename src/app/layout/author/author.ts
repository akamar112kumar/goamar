import { Component, OnInit, effect, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Api } from '../../services/api';

import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';



@Component({
  selector: 'app-author',
  imports: [FontAwesomeModule],
  templateUrl: './author.html',
  styleUrl: './author.scss',
})
export class Author implements OnInit {
  counter = signal(0);
  faCoffee = faCoffee;
  faPlus = faPlus;
  faMinus = faMinus;
  posts = signal<any[]>([]);
  data = signal<any[]>([]);
  combined = signal<any[]>([]);
  error = signal<string | null>(null);
constructor(private api: Api) {
  effect(() => {
    console.log(`Counter value: ${this.counter()}`);
  }); 
 
}


ngOnInit() {
    // Use forkJoin to request users and posts together and combine them by id
    forkJoin({ users: this.api.getusers(), posts: this.api.getPosts() }).subscribe({
      next: ({ users, posts }) => {
        this.error.set(null);
        this.data.set(users); 
        this.posts.set(posts);
        // attach posts to their respective user by matching user.id === post.userId
        const usersWithPosts = users.map((u: any) => ({
          ...u,
          posts: posts.filter((p: any) => p.userId === u.id),
        }));
        this.combined.set(usersWithPosts);
      },
      error: (err) => {
        this.error.set(err.message || 'An error occurred');
        console.error(err);
      },
    });
}

updateCounter(value: number = 1) {
  this.counter.update((count) => count + value);
}
}
