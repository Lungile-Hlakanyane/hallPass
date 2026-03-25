import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ToastController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-hall-details',
  templateUrl: './view-hall-details.component.html',
  styleUrls: ['./view-hall-details.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ViewHallDetailsComponent  implements OnInit {

  booking = {
    hallName: 'Grand Ballroom',
    capacity: 500,
    dateBooked: '2024-09-16',
    ceremonyType: 'Wedding',
    amountPaid: 'R1000.00',
    rating: 4
  };

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private alertController:AlertController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

 async cancel() {
  const alert = await this.alertController.create({
    header: 'Confirm Cancellation',
    message: 'Are you sure you want to cancel this booking?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancellation cancelled');
        }
      }, {
        text: 'Yes',
        handler: () => {
          console.log('Cancellation confirmed');
          this.cancelBooking();
        }
      }
    ]
  });

  await alert.present();
}

  async cancelBooking(){
     const loading = await this.loadingController.create({
    message: 'Cancelling...',
  });
  await loading.present();
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.error(error);
    await loading.dismiss();
    const toast = await this.toastController.create({
      message: 'Error cancelling booking. Please try again.',
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
    return;
  }

  await loading.dismiss();
  const toast = await this.toastController.create({
    message: 'You have successfully cancelled this booking.',
    duration: 2000,
    position: 'top',
    color: 'success'
  });
  await toast.present().then(()=>{
    this.router.navigateByUrl('/my-bookings');
  });
  }

}
