import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class OtpComponent  implements OnInit {

  otp: any = '';
   otpForm = new FormGroup({
    otp: new FormControl('', [Validators.required])
  });

  email: string = 'lungilehlakanyane@gmail.com';
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

   onVerify() {
    if (this.otpForm.valid) {
      this.presentLoading();
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Verifying OTP...',
      duration: 2000
    });
    await loading.present();

    loading.onDidDismiss().then(() => {
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'OTP Successfully verified...',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
    toast.onDidDismiss().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  resendOtp() {
    console.log('OTP resent');
  }

}
