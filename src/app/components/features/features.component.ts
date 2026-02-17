import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
}
