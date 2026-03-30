import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { DemoPanelService } from '../../services/demo-panel.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private demoPanelService: DemoPanelService) {}

  openDemo() {
    this.demoPanelService.openPanel();
  }
}
