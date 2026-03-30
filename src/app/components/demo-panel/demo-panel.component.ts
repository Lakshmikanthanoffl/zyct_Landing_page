import { Component, ViewChild } from '@angular/core';
import { DemoPanelService } from '../../services/demo-panel.service';
import { LoaderService } from '../../services/loader.service';
import { ToastService } from '../../services/toast.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-demo-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo-panel.component.html',
  styleUrls: ['./demo-panel.component.css']
})
export class DemoPanelComponent {
  @ViewChild('demoForm') demoForm!: NgForm;

  showDemo$: Observable<boolean>;
  formData = { name: '', email: '', phone: '', company: '' };
  loading = false;

  constructor(
    private demoPanelService: DemoPanelService,
    private loader: LoaderService,
    private toast: ToastService
  ) {
    this.showDemo$ = this.demoPanelService.showPanel$;
  }

  closeDemo() {
    this.demoPanelService.closePanel();
    this.formData = { name: '', email: '', phone: '', company: '' };
    if (this.demoForm) {
      this.demoForm.resetForm();
    }
  }

  sendDemoRequest(form: NgForm) {
    if (form.invalid) {
      this.toast.show('⚠️ Please fill all required fields correctly.', 'error');
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }

    if (this.loading) return;

    this.loading = true;
    this.loader.show();

    const templateParams = {
      from_name: this.formData.name,
      reply_to: this.formData.email,
      phone: this.formData.phone,
      company: this.formData.company,
      message: `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\nCompany: ${this.formData.company}`
    };

    const adminMail = emailjs.send('service_l0hjev7', 'template_ylxt6bm', templateParams, 'xQ6y-9kgIWd_Gm6UY');
    const userMail  = emailjs.send('service_l0hjev7', 'template_0v38ssg',  templateParams, 'xQ6y-9kgIWd_Gm6UY');

    Promise.all([adminMail, userMail])
      .then(() => {
        this.loading = false;
        this.loader.hide();
        this.toast.show('✅ Demo request sent successfully! We will contact you shortly.', 'success');
        this.closeDemo();
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
        this.loader.hide();
        this.toast.show('❌ Failed to send request. Please try again.', 'error');
      });
  }
}
