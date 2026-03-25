import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ModalController, NavController, ActionSheetController, AlertController } from '@ionic/angular';
import { EditProfileModalComponent } from 'src/app/re-useable-components/edit-profile-modal/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ProfileComponent  implements OnInit {
  notificationsEnabled = false;
  darkModeEnabled = false;

   user = {
    username: 'John Doe',
    email: 'johndoe@example.com',
    profileImage: 'https://via.placeholder.com/100'
  };

  role = 'client';

  warnings = [
    { reason: 'Warning 1' },
    { reason: 'Warning 2' }
  ];

  bookingsCount = 10;
  warningsCount = 2;
  lastVisitDate = new Date();

   activeTab = 'profile';

  bookings = [
    {
      hallName: 'Grand Ballroom',
      date: '2024-09-16',
      time: '10:00'
    },
    {
      hallName: 'Royal Hall',
      date: '2024-09-17',
      time: '11:00'
    }
  ];

  constructor(
    private router:Router,
    private navController:NavController,
    private loadingController:LoadingController,
    private modalController:ModalController,
    private actionSheetController: ActionSheetController,
    private alertController:AlertController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }


  logout() {
  this.alertController.create({
    header: 'Confirm',
    message: 'Are you sure you want to exit?',
    buttons: [
      {
        text: 'No',
        role: 'cancel'
      },
      {
        text: 'Yes',
        handler: async () => {
          const loading = await this.loadingController.create({
            message: 'Logging out...'
          });
          await loading.present();

          setTimeout(async () => {
            await loading.dismiss();
            this.router.navigateByUrl('/login');
          }, 2000);
        }
      }
    ]
  }).then(alert => alert.present());
}

 async openSettings() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Settings',
      buttons: [
        {
          text: 'Turn On Notifications',
          icon: this.notificationsEnabled ? 'checkbox-outline' : 'square-outline',
          handler: () => {
            this.notificationsEnabled = !this.notificationsEnabled;
          }
        },
        {
          text: 'Dark Mode',
          icon: this.darkModeEnabled ? 'checkbox-outline' : 'square-outline',
          handler: () => {
            this.darkModeEnabled = !this.darkModeEnabled;
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

   async editProfile() {
    const modal = await this.modalController.create({
      component: EditProfileModalComponent,
      cssClass: 'edit-profile-modal',
      backdropDismiss: true
    });
    await modal.present();
  }

}
