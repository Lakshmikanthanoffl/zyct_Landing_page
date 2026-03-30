import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';
import { DemoPanelService } from '../services/demo-panel.service';

@Component({
  selector: 'app-why-zyct',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './why-zyct.component.html',
  styleUrl: './why-zyct.component.css'
})
export class WhyZyctComponent {
  constructor(private demoPanelService: DemoPanelService) {}

  openDemo() {
    this.demoPanelService.openPanel();
  }
}
