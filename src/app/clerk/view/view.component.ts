import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewpatient:FormGroup;
  aa: any;
  data1:User[];
  constructor(private ps:PatientService,private fb:FormBuilder) { }

  ngOnInit() {
     this.viewpatient=this.fb.group({
       id:['',Validators.required]
     })
}
submit(){
  this.ps.getUserById1(this.viewpatient.value.id)
  .subscribe(data=>{
     this.data1=data;
     console.log( this.data1)
  })
}
}
