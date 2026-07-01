import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  imports: [],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.scss',
})
export class Homecomponent {
@Input() item: string = '';
}
