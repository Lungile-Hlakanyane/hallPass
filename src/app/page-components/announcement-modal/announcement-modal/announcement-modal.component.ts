import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ModalController,ToastController } from '@ionic/angular';


@Component({
  selector: 'app-announcement-modal',
  templateUrl: './announcement-modal.component.html',
  styleUrls: ['./announcement-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AnnouncementModalComponent  implements OnInit {

  announcement = {
    subject: '',
    targetAudience: '',
    announcement: ''
  };

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private modalController:ModalController,
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

  async createAnnouncement(){
    await this.presentLoading().then(()=>{
      this.router.navigateByUrl('/announcements');
    });
  }

   async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Creating announcement...',
      duration: 2000
    });
    await loading.present();
    loading.onDidDismiss().then(async () => {
      await this.presentToast();
      await this.modalController.dismiss();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Announcement successfully created...',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }


}
