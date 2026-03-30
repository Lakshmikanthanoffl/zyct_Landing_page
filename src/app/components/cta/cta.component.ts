import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { DemoPanelService } from '../../services/demo-panel.service';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent {
  constructor(private demoPanelService: DemoPanelService) {}

  openDemo() {
    this.demoPanelService.openPanel();
  }
}
