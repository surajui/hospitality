import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { ClerkloginComponent } from './clerklogin/clerklogin.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewComponent } from './view/view.component';
   
const abc:Routes=[
  {path:'',component:ClerkloginComponent},
  {path:'sidenav',component:SidenavComponent,
children:[
  {path:'addpatient',component:AddpatientComponent},
  {path:'view',component:ViewComponent},
  {path:'updatepatient',component:UpdatepatientComponent}
]}
]
@NgModule({
  declarations: [AddpatientComponent, UpdatepatientComponent, ClerkloginComponent, SidenavComponent, ViewComponent],
  imports: [
    CommonModule,RouterModule.forChild(abc),ReactiveFormsModule
  ]
})
export class ClerkModule { }
