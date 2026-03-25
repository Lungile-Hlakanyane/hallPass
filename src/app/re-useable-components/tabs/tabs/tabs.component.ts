import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule]
})
export class TabsComponent  implements OnInit, OnDestroy {

  subscription!: Subscription;
  userRole: string | null  = null;

  constructor() { }

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
    console.log("Role: ", this.userRole);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
