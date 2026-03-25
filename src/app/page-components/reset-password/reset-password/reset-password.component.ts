import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ResetPasswordComponent  implements OnInit {

   forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  sentences = ['Efficiently manage your hall bookings', 'Streamline your booking process', 'Get notified about your bookings'];
  currentIndex = 0;

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController
  ) { }

  ngOnInit() {
      setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.sentences.length;
    }, 3000);
  }

  onForgotPassword() {
    if (this.forgotPasswordForm.valid) {
      console.log('OTP sent to', this.forgotPasswordForm.get('email')?.value);
      this.router.navigateByUrl('/password-reset-otp');
    }
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

}
