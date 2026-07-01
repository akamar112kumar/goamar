import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Api } from '../../services/api';


@Component({
  selector: 'app-exercise2june',
  imports: [CommonModule, FormsModule, RouterOutlet],
  providers: [Api],
  templateUrl: './exercise2june.html',
  styleUrl: './exercise2june.scss',
  encapsulation: ViewEncapsulation.None
})
export class Exercise2june implements OnInit {

  private searchInput$ = new BehaviorSubject<string>('');
  searchTerm: string = '';
  adminUsername = '';
  adminPassword = '';
  private apiurl = inject(Api);
  apidata: any;
  apidata$ = this.apiurl.getusers();
  items: any;

  ngOnInit() {
       this.apiurl.getusers().subscribe((data) => {
      this.apidata = data;
      console.log(data);
    });
    this.apiurl.getitems().subscribe((data) => {
      this.items = data;
      console.log(data, "items");
    });

  }

  users$ = new BehaviorSubject([
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Manager' },
    { id: 4, name: 'David', role: 'User' },
    { id: 5, name: 'Eve', role: 'Admin' }
  ]);

  // ✅ Filter logic
  get filteredUsers() {
    return this.users$.value.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  // ✅ Apply RxJS operators for filtering
  filteredUsers$ = combineLatest([
    this.users$,
    this.searchInput$.pipe(
      debounceTime(300),           // ⏳ wait for typing pause
      distinctUntilChanged()       // ✅ avoid duplicate searches
    )
  ]).pipe(
    map(([users, search]) =>
      users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  );

  // ✅ Input handler
  onSearch(term: string) {
    this.searchInput$.next(term);
  }

  onAdminLogin() {
    if (!this.adminUsername || !this.adminPassword) {
      alert('Please enter username and password.');
      return;
    }

    alert(`Admin login: ${this.adminUsername}`);
    this.adminUsername = '';
    this.adminPassword = '';
  }
}
