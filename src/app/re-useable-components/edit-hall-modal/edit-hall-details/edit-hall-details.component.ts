import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, NavController, ToastController, ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-hall-details',
  templateUrl: './edit-hall-details.component.html',
  styleUrls: ['./edit-hall-details.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class EditHallDetailsComponent  implements OnInit {
  hallForm!: FormGroup;
  
  amenities = [
    { label: 'Catering', value: 'catering' },
    { label: 'Parking', value: 'parking' },
    { label: 'WiFi', value: 'wifi' },
  ];

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private modalController: ModalController,
    private navParams: NavParams
  ) { 
     this.hallForm = new FormGroup({
      hallName: new FormControl(this.navParams.get('hall').name),
      address: new FormControl(this.navParams.get('hall').address),
      capacity: new FormControl(this.navParams.get('hall').capacity),
      amenities: new FormArray([]),
      price: new FormControl(this.navParams.get('hall').price)
    });
  }

  ngOnInit() {
    
  }

  async saveHallDetails() {
  const loading = await this.loadingController.create({
    message: 'Saving...'
  });
  await loading.present();
  // Simulate a delay
  setTimeout(async () => {
    await loading.dismiss();
    const toast = await this.toastController.create({
      message: 'You have successfully edited this hall',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
    this.modalController.dismiss(this.hallForm.value);
  }, 2000);
}

  dismissModal() {
    this.modalController.dismiss();
  }

}
