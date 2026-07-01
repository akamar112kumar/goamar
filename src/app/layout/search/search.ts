import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, from, Subject, switchMap, of, mergeMap, catchError, throwError } from 'rxjs';
import { Api } from '../../services/api';


@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {

  searchTerm = '';
  searchResults: any[] = [];
  private searchSubject = new Subject<string>();
  searchResults1: any[] = [];  
  constructor(private searchService: Api) {
    this.searchSubject.pipe(
      debounceTime(400),          // wait 400ms after user stops typing
      distinctUntilChanged(),      // avoid duplicate search
      switchMap((query) => this.searchService.search(query))
    ).subscribe((results) => {
      this.searchResults = results;
    });
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }
  ngOnInit() {
    this.searchService.getPosts().subscribe((data) => {
      this.searchResults1 = data;
    });
  } 


}
