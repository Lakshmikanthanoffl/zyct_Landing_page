import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { ToastService } from '../../services/toast.service';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cta',
  imports: [CommonModule,FormsModule,RevealOnScrollDirective],
  standalone: true,
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent {
  @ViewChild('demoForm') demoForm!: NgForm;
 
  current = 0;
  showDemo = false;
  formData = {
    name: '',
    email: '',
    phone: '',
    company: ''
  };
  loading = false;
  constructor(private loader: LoaderService, private toast: ToastService) {}
  openDemo() {
    this.showDemo = true;
  }
  
  closeDemo() {
    this.showDemo = false;
  
    // Clear model
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: ''
    };
  
    // Reset form state (touched, errors, etc.)
    if (this.demoForm) {
      this.demoForm.resetForm();
    }
  }
  sendDemoRequest(form: any) {

    if (form.invalid) {
      this.toast.show('⚠️ Please fill all required fields correctly.', 'error');
      return;
    }
  
    // 🚫 Prevent double submit
    if (this.loading) {
      return;
    }
  
    this.loading = true;
    this.loader.show();
  
    const templateParams = {
      from_name: this.formData.name,
      reply_to: this.formData.email,
      phone: this.formData.phone,
      company: this.formData.company,
      message: `Name: ${this.formData.name}
  Email: ${this.formData.email}
  Phone: ${this.formData.phone}
  Company: ${this.formData.company}`
    };
  
    const adminMail = emailjs.send(
      'service_l0hjev7',
      'template_ylxt6bm',
      templateParams,
      'xQ6y-9kgIWd_Gm6UY'
    );
  
    const userMail = emailjs.send(
      'service_l0hjev7',
      'template_0v38ssg',
      templateParams,
      'xQ6y-9kgIWd_Gm6UY'
    );
  
    Promise.all([adminMail, userMail])
      .then(() => {
        this.loading = false;
        this.loader.hide();
  
        this.toast.show(
          '✅ Demo request sent successfully! We will contact you shortly.',
          'success'
        );
  
        this.formData = { name: '', email: '', phone: '', company: '' };
        form.resetForm();
         // ✅ AUTO CLOSE SLIDER / POPUP
        this.closeDemo();
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
        this.loader.hide();
  
        this.toast.show(
          '❌ Failed to send request. Please try again.',
          'error'
        );
      });
  }
}
