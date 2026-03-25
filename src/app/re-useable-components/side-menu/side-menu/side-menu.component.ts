import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
  providers: [ModalController, LoadingController, AlertController]
})
export class SideMenuComponent  implements OnInit, OnDestroy {

  subscription!: Subscription;
  userRole: string | null  = null;

  constructor(
    private modalController:ModalController,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private router:Router,
  ) { }

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
    console.log("Role: ", this.userRole);
  }

  ngOnDestroy() {
   
  }

  async closeMenu(){
    await this.modalController.dismiss();
  }

  async logout() {
    await this.closeMenu();
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Logout canceled');
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Logging out...',
              duration: 2000, 
            });
            await loading.present();
            setTimeout(() => {
              loading.dismiss();
              this.router.navigateByUrl('/login');
            }, 2000);
          }
        }
      ]
    });
    await alert.present();
  }

  async navigate(link:string){
    await this.closeMenu();
    this.router.navigateByUrl(link);
  } 

}
