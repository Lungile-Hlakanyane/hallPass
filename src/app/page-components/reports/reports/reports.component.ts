import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ReportsComponent  implements OnInit {

  userRole: string | null = null;

   reports = [
    {
      hallName: 'Hall 1',
      location: 'Bloemanda, Mangaung',
      reporter: 'Fikile Baartman',
      reason: 'Fraudulent papers',
      status: 'Pending'
    },
    {
      hallName: 'Hall 2',
      location: 'Heidelberg, Gauteng',
      reporter: 'John Doe',
      reason: 'No amenities',
      status: 'In-Progress'
    },
    {
      hallName: 'Hall 3',
      location: 'Pretoria, Gauteng',
      reporter: 'Jane Smith',
      reason: 'Maintenance issue',
      status: 'Resolved'
    }
  ];
  searchQuery = '';

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

  goBack() {
    this.navController.back();
  }

  searchReports() {
    console.log(this.searchQuery);
  }

  resolveReport(report: any) {
    console.log('Resolve report:', report);
  }

  assignReport(report: any) {
    console.log('Assign report:', report);
  }

  deleteReport(report: any) {
    console.log('Delete report:', report);
  }

}
