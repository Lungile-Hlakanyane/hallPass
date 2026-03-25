import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class NotificationsComponent  implements OnInit {

  notifications = [
    {
      title: 'Booking Reminder',
      message: 'You have a booking tomorrow at 10am',
      senderName: 'John Doe',
      senderAvatar: 'https://example.com/john-doe-avatar.jpg',
      time: '1 hour ago'
    },
    {
      title: 'Booking Update',
      message: 'Your booking has been updated',
      senderName: 'Jane Doe',
      senderAvatar: 'https://example.com/jane-doe-avatar.jpg',
      time: '2 hours ago'
    },
    {
      title: 'Booking Cancellation',
      message: 'Your booking has been cancelled',
      senderName: 'Admin',
      senderAvatar: 'https://example.com/admin-avatar.jpg',
      time: '3 hours ago'
    }
  ];

  filteredNotifications = this.notifications;
  searchTerm = '';


  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController
  ) { }

  ngOnInit() {}

   viewNotification(notification:any) {
    console.log(notification);
    this.router.navigateByUrl('/message');
  }

 searchNotifications() {
  const term = this.searchTerm.toLowerCase();
  this.filteredNotifications = this.notifications.filter(notification => {
    return notification.title.toLowerCase().includes(term) ||
           notification.message.toLowerCase().includes(term) ||
           notification.senderName.toLowerCase().includes(term);
  });
}

  goBack(){
    this.navController.back();
  }

}
