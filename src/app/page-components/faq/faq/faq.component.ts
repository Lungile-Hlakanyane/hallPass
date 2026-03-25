import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, LoadingController, ToastController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class FaqComponent  implements OnInit {

  faqs = [
    {
      question: 'How do I add a new Hall?',
      answer: 'Navigate to the Dashboard > Add New Hall > Fill in the form and submit.'
    },
    {
      question: 'How do I approve a booking?',
      answer: 'Go to Bookings select the booking, and tap "Approve".'
    },
  ];

  constructor(
    private navController:NavController,
    private loadingController:LoadingController,
    private toastController: ToastController,
    private router:Router,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  async contactSupport() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Contact Support',
    subHeader: 'Choose an option',
    buttons: [
      {
        text: 'Call Support (012 345 6789)',
        icon: 'call-outline',
        handler: () => {
          window.open('tel:0123456789', '_system');
        }
      },
      {
        text: 'Call Backup Support (011 222 3344)',
        icon: 'call-outline',
        handler: () => {
          window.open('tel:0112223344', '_system');
        }
      },
      {
        text: 'Email Support (support@hallPass.co.za)',
        icon: 'mail-outline',
        handler: () => {
          window.open('mailto:support@hallPass.co.za', '_system');
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

}
