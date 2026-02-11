import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<{ message: string; type: ToastType } | null>(null);
  toast$ = this.toastSubject.asObservable();

  show(message: string, type: ToastType = 'info') {
    this.toastSubject.next({ message, type });
    setTimeout(() => this.clear(), 3000); // auto hide after 3 sec
  }

  clear() {
    this.toastSubject.next(null);
  }
}
