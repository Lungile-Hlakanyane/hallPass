import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, IonicModule, LoadingController, ModalController, NavController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ViewUserDetailsComponent  implements OnInit {
  selectedTab = 'info';

  user = {
    name: 'Lungile Hlakanyane',
    email: 'lungilehlakanyane@gmail.com',
    registeredWhen: '2022-01-01',
    activeStatus: true
  };

  booking = {
    hallName: 'Hall 1',
    location: '123 Main Mangaung St ',
    amenities: 'Catering, Parking, WiFi',
    amountPaid: 500,
    paymentMethod: 'Credit Card'
  };

  reports = [
    {
      title: 'Report 1',
      description: 'This is a report',
      reportedBy: 'John Doe',
      reportedOn: new Date()
    },
    {
      title: 'Report 2',
      description: 'This is another report',
      reportedBy: 'Jane Doe',
      reportedOn: new Date()
    }
  ];

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private modalController:ModalController,
    private actionSheetController: ActionSheetController,
    private alertController:AlertController
  ) { }

  ngOnInit() {}


  goBack() {
    this.navController.back();
  }

  segmentChanged(event: any) {
    this.selectedTab = event.detail.value;
  }

  async deleteHall() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete this User?',
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
                message: 'You have successfully deleted this user',
                duration: 2000,
                position: 'top',
                color: 'success'
              });
              await toast.present().then(()=>{
                this.router.navigateByUrl('/manage-users');
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
      message: 'Are you sure you want to block this User?',
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
                message: 'You have successfully blocked this user',
                duration: 2000,
                position: 'top',
                color: 'success'
              });
              await toast.present().then(()=>{
                this.router.navigateByUrl('/manage-users')
              });
            }, 2000);
          }
        }
      ]
    });
    await alert.present();
  }


}
