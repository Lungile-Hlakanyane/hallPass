import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class EditProfileModalComponent  implements OnInit {
   editProfileForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.editProfileForm.patchValue({
      username: 'Lungile Vincent Hlakanyane',
      email: 'lungilevincenthlakanyane.co.za'
    });
  }

   async saveChanges() {
    await this.closeModal();
    await this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Saving...',
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
      message: 'Your changes have been saved...',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
