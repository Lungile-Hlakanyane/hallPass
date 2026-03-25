import { Component, OnInit } from '@angular/core';
import { IonContent} from '@ionic/angular/standalone';
import { Hall } from '../models/Hall';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SideMenuComponent } from '../re-useable-components/side-menu/side-menu/side-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, CommonModule,ReactiveFormsModule, FormsModule, IonContent],
    providers: [ModalController]
})
export class HomePage implements OnInit{

  featuredHalls: Hall[] = [];
  userRole: string | null = null;
  searchQuery: string = '';
  allHalls: Hall[] = [];

  constructor(
    private modalController:ModalController,
    private router:Router
  ) {}

  bookHall(hall: any) {
    console.log('Booking hall:', hall);
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  ngOnInit(): void {
   this.loadFeaturedHalls();
   //fetched the role from the local storage
   this.userRole = localStorage.getItem('userRole');
   console.log('Role: ', this.userRole);
  }

  loadFeaturedHalls(): void {
    this.allHalls = [
      {
        name: 'Hall 1',
        address: '123 Main St',
        capacity: 100,
        amenities: 'Catering, Parking, WiFi',
        status: 'available',
        rating: 4,
        comments: [
          {
            text: 'Great hall for events!',
            author: 'John Doe',
          },
        ],
        newComment: '',
      },
      {
        name: 'Hall 2',
        address: '456 Elm St',
        capacity: 200,
        amenities: 'Catering, Parking, WiFi, Projector',
        status: 'booked',
        rating: 3,
        comments: [],
        newComment: '',
      },
      {
        name: 'Hall 3',
        address: '789 Oak St',
        capacity: 300,
        amenities: 'Catering, Parking, WiFi, Projector, Sound System',
        status: 'not-booked',
        rating: 5,
        comments: [
          {
            text: 'Excellent facilities and staff!',
            author: 'Jane Doe',
          },
        ],
        newComment: '',
      },
    ];
    this.featuredHalls = [...this.allHalls]; //initialize featuredHalls with all halls
  }

   addComment(hall: any) {
    if (hall.newComment) {
      hall.comments.push({
        text: hall.newComment,
        author: 'You',
      });
      hall.newComment = '';
    }
  }

  async openMenuModal() {
    console.log('openMenuModal() called'); 
    const modal = await this.modalController.create({
     component: SideMenuComponent, 
   });
    await modal.present();
    console.log('Modal presented'); 
  }

  searchHalls(): void {
  const query = this.searchQuery.toLowerCase();
  if (query === '') {
    this.featuredHalls = [...this.allHalls];
  } else {
    this.featuredHalls = this.allHalls.filter((hall) => {
      return (
        hall.name.toLowerCase().includes(query) ||
        hall.address.toLowerCase().includes(query) ||
        hall.amenities.toLowerCase().includes(query)
      );
    });
  }
}

}
