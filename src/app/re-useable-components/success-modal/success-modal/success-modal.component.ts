import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent  implements OnInit {

  constructor(
    private modalController:ModalController,
    private router:Router
  ) { }

  ngOnInit() {}

  async dismissModal(){
    this.modalController.dismiss().then(()=>{
      this.navigate('/my-bookings');
    })
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

}
