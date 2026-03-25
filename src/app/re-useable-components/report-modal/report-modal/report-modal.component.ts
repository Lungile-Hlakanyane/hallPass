import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ReportModalComponent  implements OnInit {
  reason = '';
  otherReason = '';
  reportOptions = [
    { label: 'Amenities not available', value: 'amenities' },
    { label: 'Hall not as described', value: 'not-as-described' },
    { label: 'Unclean environment', value: 'unclean' },
    { label: 'Other', value: 'other' }
  ];

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

  async submitReport() {
    this.closeModal();
  const loading = await this.loadingController.create({
    message: 'Reporting...'
  });
  await loading.present();
  console.log('Reason:', this.reason);
  if (this.reason === 'other') {
    console.log('Other reason:', this.otherReason);
  }
  setTimeout(async () => {
    await loading.dismiss();

    const toast = await this.toastController.create({
      message: 'You have successfully reported this hall',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }, 2000);
}


}
