import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-municipality-bookings',
  templateUrl: './municipality-bookings.component.html',
  styleUrls: ['./municipality-bookings.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MunicipalityBookingsComponent  implements OnInit {

  userRole: string | null = null ;
  selectedTab = 'upcoming';
  bookings = [
    { id: 1, hallName: 'Hall 1', bookingDate: '2027-03-01', eventDate: '2027-03-15', totalCost: 'R500', image: '../../../../assets/accomodation_02.jpeg' },
    { id: 2, hallName: 'Hall 2', bookingDate: '2023-04-01', eventDate: '2023-04-15', totalCost: 'R600', image: '../../../../assets/accomodation_02.jpeg' },
    { id: 3, hallName: 'Hall 3', bookingDate: '2023-05-01', eventDate: '2023-05-15', totalCost: 'R700', image: '../../../../assets/accomodation_02.jpeg' }
  ];

  upcomingBookings = this.bookings.filter(booking => new Date(booking.eventDate) > new Date());
  pastBookings = this.bookings.filter(booking => new Date(booking.eventDate) < new Date());


  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController
  ) { }

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
    console.log('User Role: ', this.userRole);
  }

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  viewDetails(booking: any): void {
    console.log(booking);
  }

  searchBookings(event: any): void {
    console.log(event.target.value);
  }

   segmentChanged(event: any) {
    this.selectedTab = event.detail.value;
  }

  approveBooking(booking: any) {
  console.log('Approve booking:', booking);
  }

  declineBooking(booking: any) {
   console.log('Decline booking:', booking);
  }


}
