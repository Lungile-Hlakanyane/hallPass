import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class PendingRequestsComponent  implements OnInit {

  userRole: string | null = null;

   requests = [
    {
      title: 'Toilets Leaking Water',
      description: 'Toilets leaking water in the hall',
      location: 'Bloemanda, Mangaung',
      reporter: 'Fikile Baartman',
      date: '20 May 2025'
    },
    {
      title: 'Broken Chairs',
      description: 'Some chairs are broken and need to be replaced',
      location: 'Uitsig,  Bloemfontein',
      reporter: 'Nathi Gumede',
      date: '15 May 2025'
    },
    {
      title: 'Air Conditioning Issue',
      description: 'The air conditioning is not working properly',
      location: 'Mangaung, Bloemfontein',
      reporter: 'Jabulani Sekhulu',
      date: '10 May 2025'
    },
    {
      title: 'Lighting Problem',
      description: 'Some lights are not working in the hall',
      location: 'Mangaung, Bloemfontein',
      reporter: 'Thabo Wittes',
      date: '5 May 2025'
    }
  ];

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController
  ) { }

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
    console.log('Role: ', this.userRole);
  }

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }


}
