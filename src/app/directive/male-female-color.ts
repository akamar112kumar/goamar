import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaleFemaleColor]',
})
export class MaleFemaleColor {
  

  constructor(private el: ElementRef) { 
    const text = this.el.nativeElement.textContent.toLowerCase();
  this.el.nativeElement.style.backgroundColor = text.includes('male') ? 'lightblue' : 'pink';
  }

}
