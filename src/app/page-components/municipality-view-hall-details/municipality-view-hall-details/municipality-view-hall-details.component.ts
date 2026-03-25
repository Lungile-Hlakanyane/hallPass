import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, NavController, ToastController, ModalController, AlertController } from '@ionic/angular';
import { EditHallDetailsComponent } from 'src/app/re-useable-components/edit-hall-modal/edit-hall-details/edit-hall-details.component';

@Component({
  selector: 'app-municipality-view-hall-details',
  templateUrl: './municipality-view-hall-details.component.html',
  styleUrls: ['./municipality-view-hall-details.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MunicipalityViewHallDetailsComponent  implements OnInit {
 @ViewChild('imageInput') imageInput: any;

  userRole: string | null = null;
  selectedTab = 'info';
  hall = {
    name: 'Hall 1',
    address: '123 Main St, Mangaung, Bloemfontein',
    status: 'available',
    capacity: 500,
    amenities: 'Catering, Parking, WiFi, Projector',
    rating: 4,
    reviews: [
      { text: 'This hall is amazing! The staff was very helpful and the facilities were top-notch.', author: 'Lungile Hlakanyane', rating: 5 },
      { text: 'The location was great, but the hall was a bit small for our event.', author: 'Jane Fikile', rating: 3 },
      { text: 'The location was great and the catering.', author: 'Baartman Thabo', rating: 4 },
      { text: 'All the amenities were provided as described in the posts.', author: 'Sanele Mkhotywa', rating: 5 },
    ],
    images: [
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg'
    ],
    reports:[
      { text: 'This hall is amazing!, but some of the amenities were not provided at all example WIFI.', author: 'Lungile Hlakanyane'},
      { text: 'This hall is not as clean as we have expected it to be.', author: 'Fikile Majola'}
    ]
  };

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private modalController:ModalController,
    private alertController:AlertController
  ) { }

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
    console.log('Role: ', this.userRole);
  }

  goBack() {
    this.navController.back();
  }

  segmentChanged(event: any) {
    this.selectedTab = event.detail.value;
  }

  editInfo() {
    this.modalController.create({
      component: EditHallDetailsComponent,
      cssClass: 'edit-hall-detailss-modal',
      backdropDismiss: true,
      componentProps: {
        hall: this.hall
      }
    }).then(modal =>{
      modal.present();
    })
  }

  addImages() {
    console.log('Add images');
  }

  selectImage() {
    this.imageInput.nativeElement.click();
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    console.log(file);
  }

   async deleteHall() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete this hall?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Deleting...'
            });
            await loading.present();
            // Add your delete logic here
            setTimeout(async () => {
              await loading.dismiss();
              const toast = await this.toastController.create({
                message: 'You have successfully deleted this hall',
                duration: 2000,
                position: 'top',
                color: 'success'
              });
              await toast.present().then(()=>{
                this.router.navigateByUrl('/hall-list');
              });
            }, 2000);
          }
        }
      ]
    });
    await alert.present();
  }

  async blockHall() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to block this hall?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Block cancelled');
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Blocking...'
            });
            await loading.present();
            // Add your block logic here
            setTimeout(async () => {
              await loading.dismiss();
              const toast = await this.toastController.create({
                message: 'You have successfully blocked this hall',
                duration: 2000,
                position: 'top',
                color: 'success'
              });
              await toast.present().then(()=>{
                this.router.navigateByUrl('/hall-list')
              });
            }, 2000);
          }
        }
      ]
    });
    await alert.present();
  }

}
