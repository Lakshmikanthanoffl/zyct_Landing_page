import { Component } from '@angular/core';
import { DemoPanelService } from '../../services/demo-panel.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private demoPanelService: DemoPanelService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openDemo() {
    this.demoPanelService.openPanel();
  }
}
