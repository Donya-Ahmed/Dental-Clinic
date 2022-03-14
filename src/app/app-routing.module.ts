import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginDoctorComponent } from './pages/login-doctor/login-doctor.component';
import { LoginRecptionistComponent } from './pages/login-recptionist/login-recptionist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReceptionistsComponent } from './pages/receptionists/receptionists.component';



const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"loginDoctor", component:LoginDoctorComponent},
  {path:"loginRecptionist",component:LoginRecptionistComponent},
  {path:"doctors",component:DoctorsComponent},
  {path:"receptionists",component:ReceptionistsComponent},
  {path:"patient/:id",component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
