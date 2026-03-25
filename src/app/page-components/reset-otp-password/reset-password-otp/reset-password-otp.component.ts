import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password-otp',
  templateUrl: './reset-password-otp.component.html',
  styleUrls: ['./reset-password-otp.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ResetPasswordOtpComponent  implements OnInit {
  
   resetPasswordOtpForm = new FormGroup({
    otp: new FormControl('', [Validators.required])
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

   onVerifyOtp() {
    if (this.resetPasswordOtpForm.valid) {
      console.log('OTP verified');
      this.router.navigateByUrl('/new-password');
    }
  }

  resendOtp() {
    console.log('OTP resent');
  }

  get otp() {
    return this.resetPasswordOtpForm.get('otp');
  }

}
