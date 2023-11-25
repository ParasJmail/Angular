import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSucess]'
})
export class CompSucessDirective {

  constructor(public sobj : ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.sobj.nativeElement.style.background = 'green';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.sobj.nativeElement.style.background = '';
  }

}
