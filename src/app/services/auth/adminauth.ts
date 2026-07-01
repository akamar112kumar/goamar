import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class Adminauth {

  
getToken(): string | null {
    return localStorage.getItem('token');
  }

getRoles(): string[] {
    const token = this.getToken();
    if (!token) return [];

    try {
      const decoded: any = jwtDecode(token);
      return decoded.roles || decoded.role || [];
    } catch {
      return [];
    }
  }

hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  
}
