import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, IonicModule, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class FavoritesComponent  implements OnInit {

  searchTerm = '';
  filteredFavorites: any[] = [];
  favorites = [
    { name: 'Hall 1', address: '123 Street', rating: 4, image: 'hall1.jpg' },
    { name: 'Hall 2', address: '456 Street', rating: 5, image: 'hall2.jpg' },
    { name: 'Hall 3', address: '789 Street', rating: 3, image: 'hall3.jpg' }
  ];

  filterFavorites() {
    this.filteredFavorites = this.favorites.filter(hall => hall.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  viewHall(hall: any) {
    console.log('View hall:', hall);
  }

  remove(hall: any) {
    console.log('Remove hall:', hall);
  }

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private modalController:ModalController,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.filterFavorites();
  }

  goBack() {
    this.navController.back();
  }

}
