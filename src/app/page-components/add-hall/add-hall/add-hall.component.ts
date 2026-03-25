import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddHallComponent  implements OnInit {

  fileName = '';

   hallForm = new FormGroup({
    name: new FormControl(''),
    picture: new FormControl(''),
    price: new FormControl(''),
    priceUnit: new FormControl(''),
    amenities: new FormArray([]),
  });

  amenities = [
    { name: 'Wi-Fi', value: 'wifi' },
    { name: 'Parking', value: 'parking' },
    { name: 'Catering', value: 'catering' },
    { name: 'Security', value: 'security' },
  ];

  constructor(
    private router:Router,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private navController:NavController
  ) { }

  ngOnInit() {
    this.amenities.forEach((amenity, index) => {
      (this.hallForm.get('amenities') as FormArray).push(new FormControl(false));
    });
  }

  
  goBack(){
    this.navController.back();
  }

  navigate(link:string){
    this.router.navigateByUrl(link);
  }

  onFileChange(event: any) {
  if (event.target.files.length > 0) {
    this.fileName = event.target.files[0].name;
  } else {
    this.fileName = '';
  }
}

async onSubmit() {
  const loading = await this.loadingController.create({
    message: 'Adding new hall...',
  });
  await loading.present();
  setTimeout(async () => {
    await loading.dismiss();
    const toast = await this.toastController.create({
      message: 'You have successfully added a Hall',
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    await toast.present().then(()=>{
      this.router.navigateByUrl('/hall-list');
    });
  }, 2000);
}

}
