import { Component, signal,  } from '@angular/core';
import { Api } from '../../services/api';
import { Observable } from 'rxjs';

type Order = { userId: number; amount: number };
type Post = { id: number; title: string };
type User = { id: number; name: string; email: string };

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.scss',
})
export class Typescript {
  apidatauser: Post[] = [];
  apidatapost: User[] = [];
 searchText = signal<User[]>([]); 
 
  result = signal<Order[]>([]);
  resultCount = signal<number>(0);
  filteredPosts = signal<Post[]>([]);
 
  constructor(private api: Api) {}
ngOnInit (){
this.getdatefortest();
}

getdatefortest(){
  this.api.getPosts().subscribe((data) => {
    this.apidatauser = data;
  })
  this.api.getusers().subscribe((data) => {
    this.apidatapost = data;
  });
 }
 searchChanged() {
  this.searchText.set(this.apidatapost.filter((item: User) =>
    item.name.toLowerCase().includes('Er'.toLowerCase())
  ));  
}
  
  


 
orders = [
  { userId: 1, amount: 10 },
  { userId: 2, amount: 12 },
  { userId: 1, amount: 15 },
  { userId: 2, amount: 10 },
  { userId: 1, amount: 5 }
];


  searchPosts(searchTerm: string) {
    const filtered = this.apidatauser.filter((post: Post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.filteredPosts.set(filtered);
  }getresult(){
  const user1Orders: Order[] = this.orders.filter(({ userId }) => userId === 2);
  this.result.set(user1Orders);
}
getresult2(){
  const user1Orders: Order[] = this.orders.filter(({ userId }) => userId === 1);
  this.result.set(user1Orders);
}
getresult3(){
 let count = 0;
// Option 1: Using a for loop (traditional approach)
for (let i = 0; i < this.orders.length; i++) {
  if (this.orders[i].userId === 1) {
    count++;
  }
}
this.resultCount.set(count);
 }
 getresult4(){
  let count = 0;
// Option 1: Using a for loop (traditional approach)
for (let i = 0; i < this.orders.length; i++) {
  if (this.orders[i].userId === 2) {
    count++;
  }
}
this.resultCount.set(count);
 }
}


