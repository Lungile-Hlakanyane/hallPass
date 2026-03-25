import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class NewPasswordComponent  implements OnInit {

  newPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {  });

  showPassword = false;
  showConfirmPassword = false;
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Saving new password...',
      duration: 2000
    });
    await loading.present();

    loading.onDidDismiss().then(() => {
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New Password created successfully...',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
    toast.onDidDismiss().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { passwordMismatch: true };
  }

  get password() {
    return this.newPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.newPasswordForm.get('confirmPassword');
  }

}
