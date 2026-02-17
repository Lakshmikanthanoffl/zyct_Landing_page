import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true   // 👈 IMPORTANT
})
export class RevealOnScrollDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('active');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
