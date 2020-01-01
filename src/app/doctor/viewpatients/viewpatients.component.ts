import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-viewpatients',
  templateUrl: './viewpatients.component.html',
  styleUrls: ['./viewpatients.component.css']
})
export class ViewpatientsComponent implements OnInit {
  patient:FormGroup;
  data1:User[];aa;
  constructor(private fb:FormBuilder,private ds:PatientService,private pt:User ) { }
  
  ngOnInit() {
    this.patient = this.fb.group({
      id: ['', Validators.required],  
  }) 
}
onSubmit(){
  
  this.ds.getUserById(this.patient.value.id)
  .subscribe(data=>{
     this.data1=data;
     console.log( this.data1)
  })
}
}
