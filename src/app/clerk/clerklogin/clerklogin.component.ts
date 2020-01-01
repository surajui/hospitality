import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clerklogin',
  templateUrl: './clerklogin.component.html',
  styleUrls: ['./clerklogin.component.css']
})
export class ClerkloginComponent implements OnInit {
   loginForm1:FormGroup;
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit() {
 this.loginForm1=this.fb.group({
   username:['',Validators.required],
   password:['',Validators.required]
 })  
 
  }
  submit1(){
    if(this.loginForm1.controls.username.value == 'admin' && this.loginForm1.controls.password.value == '1234'){
   this.route.navigate(['clerk/sidenav'])
    }
  }

}
