import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, IonicModule, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AnnouncementsComponent  implements OnInit {
  announcements = [
    {
      subject: 'Announcement 1',
      description: 'This is an announcement',
      time: new Date(),
      date: new Date()
    },
    {
      subject: 'Announcement 2',
      description: 'This is another announcement',
      time: new Date(),
      date: new Date()
    },
    {
      subject: 'Announcement 3',
      description: 'This is another announcement',
      time: new Date(),
      date: new Date()
    },
      {
      subject: 'Announcement 4',
      description: 'This is another announcement',
      time: new Date(),
      date: new Date()
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

}
