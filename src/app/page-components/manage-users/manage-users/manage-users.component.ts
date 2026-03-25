import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ManageUsersComponent  implements OnInit {
   users = [
    { username: 'Lungile Hlakanyane', registeredWhen: '2022-01-01', email: 'lungile-halakanyane@gmail.com' },
    { username: 'Thabo Wittes', registeredWhen: '2022-01-15', email: 't.wittes@gmail.com' },
    { username: 'Morena Chaoke', registeredWhen: '2022-02-01', email: 'morena.chaoke@gmail.com' }
  ];

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController,
    private actionSheetController: ActionSheetController,
    private alertController:AlertController
  ) { }

  ngOnInit() {}

  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  viewDetails(user:any){

  }

}
