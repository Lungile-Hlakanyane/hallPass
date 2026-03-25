import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ToastController   } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hall-details',
  templateUrl: './hall-details.component.html',
  styleUrls: ['./hall-details.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class HallDetailsComponent  implements OnInit {
   @ViewChild('thumbnailContainer') thumbnailContainer!: ElementRef;

  constructor(
    private router:Router,
    private navController:NavController,
    private toastController:ToastController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

   bookHall(hall: any) {
    console.log('Booking hall:', hall);
    this.navigate('/booking');
  }

   hall = {
    name: 'Hall 1',
    address: '123 Main St, Mangaung, Bloemfontein',
    status: 'available',
    capacity: 500,
    amenities: 'Catering, Parking, WiFi, Projector',
    rating: 4,
    reviews: [
      {
        text: 'This hall is amazing! The staff was very helpful and the facilities were top-notch.',
        author: 'John Doe',
        rating: 5
      },
      {
        text: 'The location was great, but the hall was a bit small for our event.',
        author: 'Jane Smith',
        rating: 3
      }
    ],
    images: [
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg',
      '../../assets/accomodation_02.jpeg'
    ]
  };

scrollLeft() {
  this.thumbnailContainer.nativeElement.scrollLeft -= 100;
}

scrollRight() {
  this.thumbnailContainer.nativeElement.scrollLeft += 100;
}

async addToFavorites(){
  const toast = await this.toastController.create({
    message: 'Added to favorites...',
    duration: 2000,
    position: 'top',
    color: 'success'
  });
  await toast.present();
}


}
