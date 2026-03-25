import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class HallListComponent  implements OnInit {

   halls = [
    { id: 1, name: 'Hall 1', picture: 'https://example.com/hall1.jpg', capacity: 100, totalCost: 500 },
    { id: 2, name: 'Hall 2', picture: 'https://example.com/hall2.jpg', capacity: 200, totalCost: 1000 },
    { id: 3, name: 'Hall 3', picture: 'https://example.com/hall3.jpg', capacity: 300, totalCost: 1500 },
  ];
  searchQuery = '';

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

   searchHalls() {
    console.log(this.searchQuery);
  }

  viewHallDetails(hall: any) {
    this.router.navigateByUrl('/municipality-view-hall-details');
  }

}
