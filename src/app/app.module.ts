import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginDoctorComponent } from './pages/login-doctor/login-doctor.component';
import { LoginRecptionistComponent } from './pages/login-recptionist/login-recptionist.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { ReceptionistsComponent } from './pages/receptionists/receptionists.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDoctorComponent,
    LoginRecptionistComponent,
    DoctorsComponent,
    ReceptionistsComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
