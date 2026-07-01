import { Component, OnInit } from '@angular/core';
import { Api } from '../../../services/api';
import { Javaapi } from '../../../services/javaapi';
import { RouterLink } from '@angular/router';
import { Employee } from '../employee';
import { EmployeepipePipe } from '../employeepipe-pipe';
import { of, switchMap,interval } from 'rxjs';
import { Header } from '../header/header';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink,Employee,EmployeepipePipe,Header],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList implements OnInit {
  employees: any[] = [];
  filtered: any[] = [];
  editingId: number | null = null;

  constructor(private api: Api, private javaapi:Javaapi) {
    
this.api.filteredData$.subscribe(data => {
      this.filtered = data;
    });

  }
  roles = ['admin', 'manager', 'user'];

onOptionSelect(event: any) {
  this.api.updateRole(event)
  // const selected = event.target.value;
  const selected = (event.target as HTMLSelectElement).value;
this.api.updateRole(selected);                // ✅ pass only the value
}

ngOnInit(): void {
this.javaapi.javaapidataget().subscribe({
  next:(data)=>{
    this.employees=data;
  },
  error:(err)=>{
    console.error("Error fetching employees", err);
  }
})

}
debouncedInput(){
  console.log("debounced input called");
}
oprator(){
  console.log("Operator called");
// interval(1000).pipe(
//     switchMap(() => this.javaapi.javaapidataget())
//   )
// .subscribe({
//   next:(data)=>{
//     this.employees=data;
//   },
//   error:(err)=>{
//     console.error("Error fetching employees", err);
//   }
// })

}

delete(id: number) {
   this.employees = this.employees.filter(emp => emp.id !== id);
  // Implement delete logic here, e.g., call API to delete employee and update the list after deletion 
  }
editUser(user:any){

 
}



}
