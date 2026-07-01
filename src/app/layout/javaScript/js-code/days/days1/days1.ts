import { Component } from '@angular/core';

@Component({
  selector: 'app-days1',
  imports: [],
  templateUrl: './days1.html',
  styleUrl: './days1.scss',
})
export class Days1 {
groupedData: { [key: string]: any[] } = {};
get groupedDataKeys(): string[] {
  return Object.keys(this.groupedData);
}

employees: { name: string; dept: string; salary: number }[] = [
  { name: "Amit", dept: "IT", salary: 50000 },
  { name: "Sara", dept: "HR", salary: 40000 },
  { name: "John", dept: "IT", salary: 60000 },
  { name: "Maya", dept: "Finance", salary: 70000 }
];

arrayreduce(){
  this.groupedData = this.employees.reduce((result: { [key: string]: any[] }, emp) => {
        if (!result[emp.dept]) {
          result[emp.dept] = [];
        }
        result[emp.dept].push(emp);
        return result;
      }, {});
}
 
cNAOL(){  
  // console.log(this.groupedDataKeys, this.groupedData);
    console.log(this.groupedDataKeys, 'keys of geter');
      console.log(this.groupedData, 'value of geter');
}

}
