
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  
  constructor(private router: Router) {}

  

 onListEmployees() {
    this.router.navigate(['/employee/list']);
    // navigation or action logic here
  }

  onAddEmployee() {
    console.log('Add Employee clicked');
    this.router.navigate(['/employee/add']);
    // navigation or action logic here
  }


}
