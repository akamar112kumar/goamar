import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Api {
  [x: string]: any;
  private urllink = 'https://jsonplaceholder.typicode.com/users';
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private loginlearnUrl = 'http://localhost:3000/logins';
  private datalist = 'http://localhost:3000/datalist';
  private roleUrl = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {} 

  
 
private selectedRoleSubject = new BehaviorSubject<string>('');  
  selectedRole$ = this.selectedRoleSubject.asObservable();

  private filteredDataSubject = new BehaviorSubject<any[]>([]);
  filteredData$ = this.filteredDataSubject.asObservable();

  // Sample data (could come from API)
  private allData = [
    { name: 'Admin Report', role: 'admin' },
    { name: 'Manage Tasks', role: 'manager' },
    { name: 'User Dashboard', role: 'user' },
    { name: 'System Config', role: 'admin' },
    { name: 'Team Approval', role: 'manager' },
  ];

  updateRole(role: any):void {
    this.selectedRoleSubject.next(role);
    const newData = this.allData.filter(item => item.role === role);
    this.filteredDataSubject.next(newData);
    console.log(newData, "amat")

  }


  datalist_learn(): Observable<any> {return this.http.get(this.datalist); }
 login_learn(): Observable<any> {return this.http.get(this.loginlearnUrl); }
 signup(data: any): Observable<any> {return this.http.post<any>(this.loginlearnUrl, data); }
 
search(query: string): Observable<any> {return this.http.get<any>(`${this.apiUrl}?q=${query}`); }
search1(id: number): Observable<any> {return this.http.get<any>(`${this.apiUrl}/${id}`);}
getusers(): Observable<any> {return this.http.get(this.urllink);}
getPosts(): Observable<any> {return this.http.get(this.apiUrl);}
getitems(): Observable<any> {return this.http.get(this.roleUrl);}

}
  