import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent  implements OnInit {

  email: any ='';
  password: any = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  showPassword = false;
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

 async onLogin() {
  if (this.loginForm.valid) {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
    });
    await loading.present();

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    const users = [
      { email: 'lungilehlakanyane@gmail.com', password: '12345', role: 'Client', id: 1 },
      { email: 'lungahlakanyane@gmail.com', password: '12345', role: 'Municipality', id: 2 },
      { email: 'lungilevincenthlakanyane@gmail.com', password: '12345', role: 'Admin', id: 3 },
    ];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('userId', user.id.toString());

      await loading.dismiss();

      const toast = await this.toastController.create({
        message: 'You have successfully logged in...',
        duration: 2000,
        position: 'top',
        color: 'success',
      });
      await toast.present();

      let homePage;
      switch (user.role) {
        case 'Client':
          homePage = '/home';
          break;
        case 'Municipality':
          homePage = '/home';
          break;
        case 'Admin':
          homePage = '/home';
          break;
        default:
          homePage = '/home';
      }
      this.router.navigateByUrl(homePage);
    } else {
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Invalid email or password',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      await toast.present();
    }
  }
}

  forgotPassword() {
    console.log('Forgot password');
  }

  register() {
    console.log('Register');
    this.router.navigateByUrl('/register');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
