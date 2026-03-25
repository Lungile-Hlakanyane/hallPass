import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RateModalComponent  implements OnInit {
  hallName = 'Hall 1';
  rating = 0;
  comment = '';

  constructor(
    private modalController:ModalController,
    private router: Router,
    private loadingController:LoadingController,
    private toastController:ToastController
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

  rateHall(rating: number) {
    this.rating = rating;
  }

  async submitRating() {
    this.closeModal();
    const loading = await this.loadingController.create({
    message: 'Rating...'
   });
   await loading.present();

   setTimeout(async () =>{
    await loading.dismiss();

    const toast = await this.toastController.create({
      message: 'Your rating was submitted successfully...',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
   },200);
  }


}
