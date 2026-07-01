import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeepipe',
})
export class EmployeepipePipe implements PipeTransform {

  transform(name: unknown, gender: string): unknown {

    
  if (!name) return name;

    gender = gender?.toLowerCase();

    if (gender === 'male' || gender === 'm') {
      return `Mr. ${name}`;
    }

    if (gender === 'female' || gender === 'f') {
      return `Mrs. ${name}`;
    }

    return name; // default if gender not provided
  }

  

}
