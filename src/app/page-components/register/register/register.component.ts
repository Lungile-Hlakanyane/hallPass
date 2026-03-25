import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class RegisterComponent  implements OnInit {

  email: any ='';
  password: any = '';
  name: any = '';
  confirmPassword: any = '';

   registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
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

  ngOnInit() {}

  onRegister() {
    if (this.registerForm.valid) {
      this.presentLoading();
    }
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

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

   async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Registering...',
      duration: 2000
    });
    await loading.present();

    loading.onDidDismiss().then(() => {
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You have successfully registered on the app, enter the OTP...',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
    toast.onDidDismiss().then(() => {
      this.router.navigateByUrl('/otp');
    });
  }

}
