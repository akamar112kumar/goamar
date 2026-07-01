import { Component } from '@angular/core';
import { Homecomponent } from '../homecomponent/homecomponent';

@Component({
  selector: 'app-headers',
  imports: [Homecomponent],
  templateUrl: './headers.html',
  styleUrl: './headers.scss',
})
export class Headers {
 currentItem = 'Laptop';
}
