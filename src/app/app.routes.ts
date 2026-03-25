import { Routes } from '@angular/router';
import { TabsComponent } from './re-useable-components/tabs/tabs/tabs.component';
import { HallDetailsComponent } from './pages/hall-details/hall-details/hall-details.component';
import { BookingComponent } from './pages/hall-details/hall-details/booking/booking/booking.component';
import { PaymentComponent } from './page-components/payment/payment/payment.component';
import { ProfileComponent } from './page-components/profile/profile/profile.component';
import { LoginComponent } from './page-components/login/login/login.component';
import { RegisterComponent } from './page-components/register/register/register.component';
import { OtpComponent } from './page-components/otp/otp/otp.component';
import { ResetPasswordComponent } from './page-components/reset-password/reset-password/reset-password.component';
import { ResetPasswordOtpComponent } from './page-components/reset-otp-password/reset-password-otp/reset-password-otp.component';
import { NewPasswordComponent } from './page-components/new-password/new-password/new-password.component';
import { MyBookingsComponent } from './page-components/my-bookings/my-bookings/my-bookings.component';
import { ViewHallDetailsComponent } from './page-components/view-hall-details/view-hall-details/view-hall-details.component';
import { NotificationsComponent } from './page-components/notifications/notifications/notifications.component';
import { MunicipalityHomeComponent } from './page-components/municipality-home/municipality-home/municipality-home.component';
import { AddHallComponent } from './page-components/add-hall/add-hall/add-hall.component';
import { HallListComponent } from './page-components/hall-list/hall-list/hall-list.component';
import { MunicipalityBookingsComponent } from './page-components/municipality-bookings/municipality-bookings/municipality-bookings.component';
import { PendingRequestsComponent } from './page-components/pending-requests/pending-requests/pending-requests.component';
import { ReportsComponent } from './page-components/reports/reports/reports.component';
import { MunicipalityViewHallDetailsComponent } from './page-components/municipality-view-hall-details/municipality-view-hall-details/municipality-view-hall-details.component';
import { MessagesComponent } from './page-components/chat-messages/messages/messages.component';
import { FavoritesComponent } from './page-components/favorites/favorites.component';
import { AdminDashboardComponent } from './page-components/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './page-components/manage-users/manage-users/manage-users.component';
import { ViewUserDetailsComponent } from './page-components/view-user-details/view-user-details/view-user-details.component';
import { AnnouncementsComponent } from './page-components/announcements/announcements/announcements.component';
import { BlockedUserComponent } from './page-components/user-blocked/blocked-user/blocked-user.component';
import { TermsAndConditionsComponent } from './page-components/terms-and-conditions/terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from './page-components/faq/faq/faq.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'otp', component: OtpComponent},
  { path: 'reset-pasword', component: ResetPasswordComponent},
  { path: 'password-reset-otp', component: ResetPasswordOtpComponent},
  { path: 'new-password', component: NewPasswordComponent},
  { path: 'view-hall-details', component: ViewHallDetailsComponent},
  { path: 'add-hall', component: AddHallComponent},
  { path: 'hall-list', component: HallListComponent},
  { path: 'pending-requests', component: PendingRequestsComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'municipality-view-hall-details',component: MunicipalityViewHallDetailsComponent},
  { path: 'message', component: MessagesComponent},
  { path: 'favorites', component:FavoritesComponent},
  { path: 'view-user-details',component: ViewUserDetailsComponent},
  { path: 'announcements', component: AnnouncementsComponent},
  { path: 'blocked-user', component:BlockedUserComponent},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: 'faq', component: FaqComponent},
  { path: '', 
    component: TabsComponent,
    children: [
      { path: 'home',loadComponent: () => import('./home/home.page').then((m) => m.HomePage),},
      { path: 'municipality-home', component: MunicipalityHomeComponent},
      { path: 'hall-details', component: HallDetailsComponent},
      { path: 'booking', component: BookingComponent},
      { path: 'payment', component: PaymentComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'my-bookings', component: MyBookingsComponent},
      { path: 'notifications',component: NotificationsComponent},
      { path: 'municipality-bookings', component: MunicipalityBookingsComponent},
      { path: 'admin-dashboard', component: AdminDashboardComponent},
      { path: 'manage-users', component: ManageUsersComponent}
    ]
  }
];
