
export interface User {
  id: string;
  name: string;
  age: number;
  active: boolean;
}

import { Component,OnInit } from '@angular/core';
import { Api } from '../../../services/api';
import { FormsModule } from '@angular/forms';
import { MaleFemaleColor } from '../../../directive/male-female-color';

@Component({
  selector: 'app-js-code',
  imports: [FormsModule],
  templateUrl: './js-code.html',
  styleUrl: './js-code.scss',
})
export class JSCode implements OnInit {
  groupedData: { [key: string]: any[] } = {};
  userslist: any[] = [];
  sliderValue: number = 30;

constructor(private api: Api) {
}

ngOnInit() {
this.test();
this.arrayreduce();
}
name = 'JavaScript Array Methods';
 
 arr = [1, 3, 4, 5, 2, 57, 6];
outputresult:any;
 output:any;
 commanval = {}

arrobj:User[] = [
{ id: 'u1', name: 'Asha', age: 28, active: true },
{ id: 'u2', name: 'Rahul', age: 35, active: false },
];

mapfunction(){
this.test();
  this.outputresult = this.userslist.map((user: any) => ({ ...user, age: user.age * 2 }));
 this.output = this.outputresult.reduce((acc: any, cur: any) => acc + cur.age, 0);
 // Original array
} 
filterfunction(){
  this.test();
    // this.outputresult = this.userslist.filter((user: any) => user.active);
    this.outputresult = this.outputresult.filter((user: any) => !user.active);
  
}

reducefunction(){
  this.test();
  this.output = this.outputresult.reduce((acc:any, cur:any) => acc + cur.age, 0); // Sum of ages
    this.outputresult = this.userslist.map((user: any) => ({ ...user, age: user.age * 2 }));
  // console.log(this.outputresult,this.userslist, 'userslist'); // Original array
}
findfunction(){
  this.test();
  const user = this.userslist.find((user: any) => user.name === 'Asha');
  this.outputresult = user ? user : 'User not found'; 
  console.log(this.outputresult, 'find'); // Store the entire user object or a message
} 
sortfunction(){
  this.test();
    // Use a traditional for-loop (bubble sort) to sort descending by age
    const arr = [...this.userslist];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j].age < arr[j + 1].age) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    this.outputresult = arr;
    this.output = this.outputresult.length;

  
    // this.outputresult = [...this.userslist].sort((a: any, b: any) => b.age - a.age);

}
foreachfunction(){
  this.arrobj.forEach(user => {
    console.log(user.name, 'forEach'); // Logs each user's name
  });
}
somefunction(){
this.test();
// const Sum1 = this.userslist.reduce((sum: any, user: any) => sum + user.age, 0);
  const hasActive = this.userslist.some((user: any) => user.active);
  console.log(hasActive, 'some'); // true
  this.output = hasActive;
  
}
everyfunction(){
  this.test();
  this.outputresult = this.userslist.map((user: any) => ({ ...user, age: user.age * 2 }));
  // const allActive = this.arrobj.every(user => user.active);     
}
includesfunction(){
this.test();
this.outputresult = [];
}
indexoffunction(){
  this.test();
  this.output = this.userslist.indexOf(this.userslist.find((user: any) => user.name === 'Asha'));
  // const index = this.arr.indexOf(4);
  console.log(this.output, 'indexOf'); // 2
}
lastindexoffunction(){
  // const lastIndex = this.arr.lastIndexOf(2);
  // console.log(lastIndex, 'lastIndexOf'); // 4
  this.test();
  // this.output = this.userslist.lastIndexOf(1);
  
  const str = "Hello Angular Hello World";
    const searchText = "World";
    const lastPos = str.lastIndexOf(searchText);
    this.output = lastPos;
    console.log(this.userslist,this.output, 'lastIndexOf'); // 13


}
joinfunction(){
  const joined = this.arr.join('-');
  console.log(joined, 'join'); // "1-3-4-5-2-57-6"

  this.output = joined;
}
splitfunction(){
  const str = "Hello,World,JavaScript";
  const splitted = str.split(',');
  console.log(splitted, 'split'); // ["Hello", "World", "JavaScript"]
}
slicefunction(){
  const sliced = this.arr.slice(2, 5);
  console.log(sliced, 'slice'); // [4, 5, 2]
}
splicefunction(){
  const arrCopy = [...this.arr];
  arrCopy.splice(2, 3, 99, 100);
  console.log(arrCopy, 'splice'); // [1, 3, 99, 100, 57, 6]
}
concatfunction(){
  const arr2 = [7, 8, 9];
  const concatenated = this.arr.concat(arr2);
  console.log(concatenated, 'concat'); // [1, 3, 4, 5, 2, 57, 6, 7, 8, 9]
}
pushfunction(){
  const arrCopy = [...this.arr];
  arrCopy.push(8);
  console.log(arrCopy, 'push'); // [1, 3, 4, 5, 2, 57, 6, 8]
}
popfunction(){
  const arrCopy = [...this.arr];
  const popped = arrCopy.pop();
  console.log(popped, 'pop'); // 6
  console.log(arrCopy, 'after pop'); // [1, 3, 4, 5, 2, 57]
} 
shiftfunction(){
  const arrCopy = [...this.arr];
  const shifted = arrCopy.shift();
  console.log(shifted, 'shift'); // 1
  console.log(arrCopy, 'after shift'); // [3, 4, 5, 2, 57, 6]
}
unshiftfunction(){
  const arrCopy = [...this.arr];
  arrCopy.unshift(0);
  console.log(arrCopy, 'unshift'); // [0, 1, 3, 4, 5, 2, 57, 6]
} 
lengthfunction(){
  const length = this.arr.length;
  console.log(length, 'length'); // 7
} 
reversefunction(){
   const reversed = [...this.arr].reverse();
this.output = reversed;

  // this.output = this.name.split(' ').reverse().join(' ');
  // const words = this.name.split(' ');
  // let reversed = '';
  // for (let i = words.length - 1; i >= 0; i--) {
  //   reversed += words[i];
  //   if (i !== 0) reversed += ' ';
  // }
  // this.output = reversed;
} 
fillfunction(){
  const filled = [...this.arr].fill(0, 2, 5);
  console.log(filled, 'fill'); // [1, 3, 0, 0, 0, 57, 6]
}
copywithinfunction(){
  const arrCopy = [...this.arr];
  arrCopy.copyWithin(0, 3, 5);
  console.log(arrCopy, 'copyWithin'); // [5, 2, 4, 5, 2, 57, 6]
}
entriesfunction(){
  const entries = this.arr.entries();
  console.log(entries, 'entries'); // Iterator object with key-value pairs
}
test(){

 this.api.datalist_learn().subscribe((data) => {
      this.userslist = data;
    });
    this.outputresult = this.userslist;
  // Users with ageAccepted true
    
}

onSliderChange(event: any) {
  // Filter users by the selected age slider value
  this.outputresult = this.userslist.filter((user: any) => user.age >= this.sliderValue);
  this.output = this.outputresult.length;
  console.log('Filtered by age:', this.sliderValue, 'Results:', this.outputresult);
}



arraymap(){
 let rows = 10;
let linenum = []
for (let i = 1; i <= rows; i++) {
    let line = "";
    // spaces
    for (let s = i; s < rows; s++) {
        line += " ";
    }
    // increasing numbers
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    linenum.push(line);
    // console.log(line);
}
console.log(linenum);

let k = linenum.map(item=>item.trim().split(''))
let mapfunction = k.map(row =>
  row.map((item, index) =>
    index === row.length - 1 ? item : ' '
  )
)

k.forEach(row => {
  const line = row
    .map((item, index) =>
      index === row.length - 1 ? item : ' '
    )
    .join(' ');

  console.log(line);
});



console.log(mapfunction)
}

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
console.log(this.groupedData, 'groupedData');
}



}
