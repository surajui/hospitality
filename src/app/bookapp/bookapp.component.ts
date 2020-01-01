import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-bookapp',
  templateUrl: './bookapp.component.html',
  styleUrls: ['./bookapp.component.css']
})
export class BookappComponent implements OnInit {
  result: Object;
  result1: Object;
  erMsg;

  constructor(private fb:FormBuilder,private s:PatientService) { }
  book:FormGroup;
  ngOnInit() {
    this.book=this.fb.group({
      book:[''],
      option:['']
    })
    this.s.getdoctor().subscribe(data=>this.result=data);
    this.s.getcard().subscribe(data=>this.result1=data
      ,(error)=>this.erMsg=error)
  }
  public  bookapp=""
  setvalue(drp:any){
    this.bookapp=drp.target.value
  }

}
