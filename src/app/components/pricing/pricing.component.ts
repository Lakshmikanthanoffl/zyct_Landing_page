import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { DemoPanelService } from '../../services/demo-panel.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  constructor(private demoPanelService: DemoPanelService) {}

  openDemo() {
    this.demoPanelService.openPanel();
  }
}
