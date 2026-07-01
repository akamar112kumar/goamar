import { Component, ViewEncapsulation } from '@angular/core';
import { from, of } from 'rxjs';


import { debounceTime, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss',
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
})
export class Rxjs {
  

searchControl = new FormControl("");
  results: any[] = [];

  constructor(private http: HttpClient) {

    this.searchControl.valueChanges.pipe(
      debounceTime(300),   // wait for typing to stop
      switchMap(query =>
        this.http.get<any[]>(`https://api.example.com/search?q=${query}`)
      )
    )
    .subscribe((data: any[]) => {
      this.results = data;
    });
  }


  twoarray() {
    
const peopleGroup1 = [
  { name: 'mike', age: 30 },
  { name: 'carlos', age: 38 },
  { name: 'ariel', age: 41, town: 'Transylvania' }
];

const peopleGroup2 = [
  { name: 'mike', age: 30 },
  { name: 'carlos', age: 38, town: 'LA' },
  { name: 'ariel', age: 41 }
];

const output = peopleGroup1.map(p1 => {
  const p2 = peopleGroup2.find(p => p.name === p1.name);
  return {...p1, ...p2 };
});

console.log(output);

  }
  
getMockUsers() {
  return of([{ id: 1, name: 'Amar' }]).subscribe(console.log);

}

getMockUsersfrom() {
from([{ id: 1, name: 'Amar' }]).subscribe(console.log);
}
list(){
  
}

}
