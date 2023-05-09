import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNeedStrong]'
})
export class NeedStrongDirective {

  constructor(el: ElementRef) {
    // console.log(el)
    el.nativeElement.style.color = 'orange'
  }

}
