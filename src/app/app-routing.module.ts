import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { BookappComponent } from './bookapp/bookapp.component';



const routes: Routes = [
  {path:'',component:MainComponent},
  {path: 'doctor', loadChildren: () => import(`./doctor/doctor.module`).then(m => m.DoctorModule) },
  {path: 'clerk', loadChildren: () => import(`./clerk/clerk.module`).then(m => m.ClerkModule) },
  {path:'bookapp',component:BookappComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
