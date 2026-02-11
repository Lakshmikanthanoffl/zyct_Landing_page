import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective {
  private revealed = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.revealed) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 120) {
      this.el.nativeElement.classList.add('active');
      this.revealed = true;
    }
  }
}
