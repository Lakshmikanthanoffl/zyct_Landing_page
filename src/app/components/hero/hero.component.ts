import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { DemoPanelService } from '../../services/demo-panel.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  images = ['dashboard.png', 'members.png', 'plans.png', 'payment.png'];
  current = 0;

  constructor(private demoPanelService: DemoPanelService) {}

  ngOnInit() {
    setInterval(() => {
      this.current = (this.current + 1) % this.images.length;
    }, 3000);
  }

  openDemo() {
    this.demoPanelService.openPanel();
  }
}
