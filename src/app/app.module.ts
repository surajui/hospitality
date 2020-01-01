import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgmCoreModule } from '@agm/core';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PatientService } from './patient.service';
import { User } from './user';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BookappComponent } from './bookapp/bookapp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    BookappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [PatientService,User],
  bootstrap: [AppComponent]
})
export class AppModule { }

