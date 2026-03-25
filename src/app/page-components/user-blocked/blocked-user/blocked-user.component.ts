import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blocked-user',
  templateUrl: './blocked-user.component.html',
  styleUrls: ['./blocked-user.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class BlockedUserComponent  implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {}

  goBack(){
    this.router.navigateByUrl('/login');
  }

}
