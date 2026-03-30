import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoPanelService {
  private showPanel = new BehaviorSubject<boolean>(false);
  showPanel$ = this.showPanel.asObservable();

  openPanel() {
    this.showPanel.next(true);
  }

  closePanel() {
    this.showPanel.next(false);
  }
}
