import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {
  update:FormGroup;
  patupdate:FormGroup;
  ab;result
  suraj: any;
  constructor(private fb:FormBuilder,private s:PatientService) { }

  ngOnInit() {
    this.update=this.fb.group({
      id:['',Validators.required],
    })
    this.patupdate=this.fb.group({
      id:['',Validators.required],
      patientname: ['', Validators.required],
      gender: ['', [Validators.required]],
      bgroup:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city:['',Validators.required],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      Disease:['', [Validators.required]]
    })
  }
  get f() { return this.update.controls; }
  submit(s){
    this.suraj=this.update.value.id;
  console.log(this.suraj)
    this.s.getUserById1(this.suraj)
    .subscribe(data=>{
       this.result=data;

       //get data in forms
       this.patupdate.setValue({
        id:this.result.id,
        patientname:this.result.patientname,
        gender:this.result.gender,
        bgroup:this.result.bgroup,
        email:this.result.email,
        city:this.result.city,
        mobile:this.result.mobile,
        Disease:this.result.Disease,
      })
    })

  }

  //update the value
  upd(){
    this.s.UpdateUser(this.patupdate.value).
    subscribe(res=>console.log(res))
  }
  canl(){
    this.patupdate.reset();
  }
}
