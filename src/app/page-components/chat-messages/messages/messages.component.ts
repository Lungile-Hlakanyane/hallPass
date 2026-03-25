import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, ModalController, NavController, ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MessagesComponent  implements OnInit {

  messages = [
    { text: 'You have a booking tommorow at 10am.', date: '2023-02-20', time: '10:10 AM' }
  ];

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private modalController:ModalController,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  goBack() {
    this.navController.back();
  }

 async actions() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Actions',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  await actionSheet.present();
}


}
