import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,private pf:PatientService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
      patientname: ['', Validators.required],
      gender: ['', [Validators.required]],
      bgroup:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city:['',Validators.required],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      Disease:['', [Validators.required]]
      });
    
    }
  get f() { return this.registerForm.controls; }
   
  onSubmit(){
    this.submitted = true;
    this.pf.createUser(this.registerForm.value)
    .subscribe(res=>{console.log(res)})
 // stop here if form is invalid
 if (this.registerForm.invalid) {
 return;
 }
 alert('SUCCESS!! :-)')
 
 }

  }

