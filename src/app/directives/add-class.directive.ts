import { Directive, HostListener, Output, EventEmitter, Renderer2, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective {

  @Output() savePageWithClass = new EventEmitter();
  @Input('pageWithClass') pageWithClass: any;
  constructor(private renderer: Renderer2) { }

  @HostListener('click',['$event.target']) onClick(value){
    if(this.pageWithClass)
      this.renderer.removeClass(this.pageWithClass,"selectedPage")
    this.renderer.addClass(value,"selectedPage");
    this.savePageWithClass.emit(value);
  }

  

} 