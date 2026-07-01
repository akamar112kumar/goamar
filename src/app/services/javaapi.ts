import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../java/employee/models/user';
@Injectable({
  providedIn: 'root',
})
export class Javaapi {
   private loginlearnUrl = 'http://localhost:3000/logins';
   private javadata= 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) {}

  signupjava(data: any): Observable<any> {
    return this.http.post<any>(this.loginlearnUrl, data);
  }
  javaapidata(data:any){return this.http.post<any>(this.javadata, data)}
  javaapidataget():Observable<any>{return this.http.get(this.javadata)}
  updateUser(id: number, user: any): Observable<any> {
  return this.http.put(`${this.javadata}/${id}`, user);
}

getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.javadata}/${id}`);
  }

}
