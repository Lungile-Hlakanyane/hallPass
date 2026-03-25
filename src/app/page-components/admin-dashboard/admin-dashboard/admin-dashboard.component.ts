import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController,ModalController, NavController, ToastController, AlertController, ActionSheetController } from '@ionic/angular';
import { AnnouncementModalComponent } from '../../announcement-modal/announcement-modal/announcement-modal.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AdminDashboardComponent  implements OnInit {
  bannerImageUrl = 'https://example.com/banner-image.jpg';
  hallsCount = 3;
  upcomingBookingsCount = 5;
  totalRevenue = 5000;
  pendingRequestsCount = 2;

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private actionSheetController: ActionSheetController,
    private alertController:AlertController,
    private modalController:ModalController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  goToAddHall() {
    this.router.navigateByUrl('/add-hall');
  }

  goToHalls() {
    this.router.navigateByUrl('/hall-list');
  }

  async openActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Picture Options',
    buttons: [
      {
        text: 'Delete Picture',
        role: 'destructive',
        icon: 'trash-outline',
        handler: () => {
          console.log('Delete picture clicked');
        }
      },
      {
        text: 'Change Picture',
        icon: 'camera-outline',
        handler: () => {
          console.log('Change picture clicked');
        },
      },
     
      {
        text: 'Log Out',
        role: 'cancel',
        icon: 'close-outline',
        handler: () => {
         this.logout();
        }
      }
    ]
  });
  await actionSheet.present();
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
            message: 'Exiting...'
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

async openAnnouncementModal(){
  const modal = await this.modalController.create({
    component: AnnouncementModalComponent,
    cssClass: 'announcement-modal',
    backdropDismiss: true,
  });
  await modal.present();
}

}
