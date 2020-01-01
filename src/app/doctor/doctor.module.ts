import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import { DoclogComponent } from './doclog/doclog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PatientsComponent } from './patients/patients.component';
import { ViewpatientsComponent } from './viewpatients/viewpatients.component';
import { TestComponent } from './test/test.component';
import { ExistGuard } from '../exist.guard';

  const dlog:Routes=[
    {path:'',component:DoclogComponent},
    {path:'sidebar',component:SidebarComponent,canDeactivate:[ExistGuard],
  children:[
  {path:'patients',component:PatientsComponent},
  {path:'viewpatient',component:ViewpatientsComponent},
  {path:'test',component:TestComponent},
 
]},   
  ]
@NgModule({
  declarations: [DoclogComponent, SidebarComponent, PatientsComponent, ViewpatientsComponent, TestComponent],
  imports: [
    CommonModule,RouterModule.forChild(dlog),ReactiveFormsModule
  ]
})
export class DoctorModule { }
