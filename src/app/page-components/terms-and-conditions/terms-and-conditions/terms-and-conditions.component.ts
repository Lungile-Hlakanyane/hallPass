import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class TermsAndConditionsComponent  implements OnInit {

  terms = [
  {
    title: '1. Introduction',
    description: 'These Terms and Conditions ("Terms") govern your use of the HallPass app, a platform for booking and managing halls for events and functions. By using the app, you agree to be bound by these Terms.'
  },
  {
    title: '2. Definitions',
    description: 'In these Terms, "we" or "us" refers to the HallPass app, and "you" refers to the user of the app. "Hall" means a venue or space booked through the app for an event or function.'
  },
  {
    title: '3. Booking and Payment',
    description: 'To book a hall, you must provide accurate and complete information, including the date, time, and details of the event. You must pay the booking fee and any other charges in full at the time of booking. We accept payment through credit/debit cards, online banking, or other payment methods as specified on the app.'
  },
  {
    title: '4. Cancellation and Refund Policy',
    description: 'If you cancel a booking, we will refund the booking fee, minus a cancellation fee, as follows: 50% refund if cancelled 30 days or more before the event; 25% refund if cancelled 14-29 days before the event; no refund if cancelled less than 14 days before the event.'
  },
  {
    title: '5. Use of the Hall',
    description: 'You must use the hall for the purpose specified in your booking and comply with all applicable laws and regulations. You are responsible for any damage or loss to the hall or its contents caused by you or your guests.'
  },
  {
    title: '6. Liability and Indemnity',
    description: 'We are not liable for any loss, damage, or injury arising from your use of the hall or the app. You indemnify us against any claims, losses, or damages arising from your breach of these Terms or your use of the app.'
  },
  {
    title: '7. Intellectual Property',
    description: 'All intellectual property rights in the app and its content are owned by us or our licensors. You are granted a non-exclusive license to use the app for your personal use.'
  },
  {
    title: '8. Governing Law and Jurisdiction',
    description: 'These Terms are governed by and construed in accordance with the laws of South Africa. Any disputes arising from these Terms will be resolved through arbitration in accordance with the rules of the Arbitration Foundation of South Africa.'
  }
];

  constructor(
    private navController:NavController,
    private loadingController:LoadingController,
    private toastController: ToastController,
    private router:Router
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  async acceptTerms(){
    console.log('Terms accepted');
    const loading = await this.loadingController.create({
      message: 'Accepting...'
    });
    await loading.present();
    setTimeout(async ()=>{
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Terms and Conditions accepted...',
        position: 'top',
        duration: 200,
        color: 'success'
      });
      await toast.present().then(()=>{
        this.router.navigateByUrl('/home');
      });
    }, 2000) // simulate a 2-second delay
  }

}
