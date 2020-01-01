import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-doclog',
  templateUrl: './doclog.component.html',
  styleUrls: ['./doclog.component.css']
})
export class DoclogComponent implements OnInit {
  loginForm: any;

  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit() {
  
    this.loginForm= this.fb.group({
      username: ['',[Validators.required]],
      password:['',Validators.required], 
    })
  }
submit(){
  if(this.loginForm.controls.username.value == 'admin' && this.loginForm.controls.password.value == '1234'){
 this.route.navigate(['doctor/sidebar']);
  }
}
}

