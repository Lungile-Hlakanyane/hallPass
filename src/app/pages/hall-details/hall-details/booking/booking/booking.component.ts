import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class BookingComponent  implements OnInit {

  constructor(
    private router:Router,
    private navController: NavController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  hall = {
    name: 'Hall 1',
    address: '123 Main St, Mangaung, Bloemfontein',
    status: 'available',
    capacity: 500,
    amenities: 'Catering, Parking, WiFi, Projector',
    rating: 4,
    price: 1000
  };

  booking = {
    date: '',
    time: '',
    guests: 0,
    eventType: ''
  };

  calculateTotalCost() {
    return this.hall.price * this.booking.guests;
  }

  proceedToPayment() {
    console.log('Proceeding to payment...');
    this.navigate('/payment');
  }

}
