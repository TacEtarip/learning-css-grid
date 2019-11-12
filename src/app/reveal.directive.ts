import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective {
  @HostBinding('class.reveal') isRevealed = false;
  constructor() { }
  @Input() set appReveal(value) {
    this.isRevealed = value;
  }

}
