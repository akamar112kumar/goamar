
import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[firstLetterStyle]',
})
export class Employee implements OnChanges {
  
  

  @Input() firstLetterStyle: string = ''; // If dynamic text is passed

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.applyStyle();
  }

  ngAfterViewInit(): void {
    this.applyStyle();
  }


  applyStyle() {
    let content = this.firstLetterStyle || this.el.nativeElement.innerText;

    if (!content || content.length === 0) return;

    // First letter styling
    const first = content.charAt(0);
    const rest = content.slice(1);

    // Apply styled HTML
    this.el.nativeElement.innerHTML = `
      <span style="color: white; font-weight: bold; background: black; padding: 1px; text-transform: uppercase; border-radius: 30%; display: inline-block; width: 20px; height: 20px; line-height: 20px; text-align: center;">
        ${first}
      </span>${rest}
    `;
  }



}
