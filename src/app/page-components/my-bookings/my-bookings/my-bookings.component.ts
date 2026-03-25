import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavController, ModalController } from '@ionic/angular';
import { RateModalComponent } from 'src/app/re-useable-components/rate-modal/rate-modal/rate-modal.component';
import { ReportModalComponent } from 'src/app/re-useable-components/report-modal/report-modal/report-modal.component';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MyBookingsComponent  implements OnInit {

  upcomingBookings = [
    { hallName: 'Hall 1', capacity: 500, address: '123 Main St', rating: 4 },
    { hallName: 'Hall 2', capacity: 300, address: '456 Elm St', rating: 5 }
  ];
  pastBookings = [
    { hallName: 'Hall 3', capacity: 200, address: '789 Oak St', rating: 3 },
    { hallName: 'Hall 4', capacity: 100, address: '101 Pine St', rating: 2 }
  ];
  filteredUpcomingBookings = [...this.upcomingBookings];
  filteredPastBookings = [...this.pastBookings];
  selectedTab = 'upcoming';
  searchTerm = '';

  constructor(
    private router:Router,
    private navController:NavController,
    private modalController:ModalController
  ) { }

  ngOnInit() {}

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  goBack(){
    this.navController.back();
  }

  segmentChanged(event: any) {
    this.selectedTab = event.detail.value;
  }
  
 rateBooking(booking: any) {
  this.modalController.create({
    component: RateModalComponent,
    cssClass: 'rate-modal',
    backdropDismiss: true,
    componentProps: {
      booking: booking
    }
  }).then(modal => {
    modal.present();
  });
}

  viewDetails(booking: any) {
    console.log('View details:', booking);
  }

 async report(booking: any) {
  const modal = await this.modalController.create({
    component: ReportModalComponent,
    cssClass: 'report-modal',
    backdropDismiss: true,
    componentProps: {
      booking: booking
    }
  });
  await modal.present();
 }

  searchBookings() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUpcomingBookings = this.upcomingBookings.filter(booking => {
      return booking.hallName.toLowerCase().includes(term) || booking.address.toLowerCase().includes(term);
    });
    this.filteredPastBookings = this.pastBookings.filter(booking => {
      return booking.hallName.toLowerCase().includes(term) || booking.address.toLowerCase().includes(term);
    });
  }
  
}
