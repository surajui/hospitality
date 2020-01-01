import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  users: User[];
  constructor(private ds:PatientService,private pt:User) { }

  ngOnInit() {
    this.ds.getUser()
      .subscribe( res => {
        this.users = res;
      });
  }
}
