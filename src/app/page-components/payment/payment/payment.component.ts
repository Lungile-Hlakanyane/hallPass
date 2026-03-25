import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavController, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { SuccessModalComponent } from 'src/app/re-useable-components/success-modal/success-modal/success-modal.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class PaymentComponent  implements OnInit {
   
  paymentMethod = 'credit-card';
  cardNumber = '';
  expirationDate = '';
  cvv = '';
  paypalEmail = '';

   hall = {
    name: 'Grand Ballroom',
    address: '123 Main St, Anytown, USA',
    status: 'available',
    capacity: 500,
    amenities: 'Catering, Parking, WiFi, Projector',
    rating: 4,
    price: 1000
  };

  booking = {
    date: '2024-09-16',
    time: '10:00',
    guests: 50,
    eventType: 'Wedding'
  };

  constructor(
    private router:Router,
    private navController:NavController,
    private loadingController:LoadingController,
    private modalController:ModalController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  calculateTotalCost() {
    return this.hall.price * this.booking.guests;
  }

  

async payNow() {
  const loading = await this.loadingController.create({
    message: 'Loading...',
  });
  await loading.present();

  setTimeout(async () => {
    await loading.dismiss();
    const modal = await this.modalController.create({
      component: SuccessModalComponent
    });
    await modal.present();
  }, 2000);
}



}
