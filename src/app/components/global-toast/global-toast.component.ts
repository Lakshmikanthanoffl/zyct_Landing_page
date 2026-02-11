import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-toast.component.html',
  styleUrls: ['./global-toast.component.css']
})
export class GlobalToastComponent {
  toast$!: Observable<{ message: string; type: 'success' | 'error' | 'info' } | null>;

  constructor(private toastService: ToastService) {
    this.toast$ = this.toastService.toast$; // ✅ assign after injection
  }
}
