import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight2]'
})
export class BetterHighlight2Directive implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'green';

  constructor() { }

  ngOnInit(){
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'salmon';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'green';
  }
}
