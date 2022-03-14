import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/sevices/auth.service';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {
  keyWord:any;
  error:boolean=false
  displayStyle = "none"
  constructor(private _router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
  }
  handlerLogin(FormLogin:NgForm){
    if(FormLogin.valid)
    {this._auth.status=true
      this.displayStyle = "block"
    }

  }

  search(FormPatient:NgForm){
    console.log(FormPatient.value)
    console.log(this._auth.patients)
    const index =this._auth.patients.findIndex(obj=>{return obj.id==FormPatient.value.patient})
    console.log(FormPatient.value)
    console.log(index)
    if(index==-1){
       this.error=true
    }
    else{
      this._auth.doctorShowPatient=this._auth.patients[index]
     console.log(this._auth.doctorShowPatient)
     this.displayStyle = "none"
      this._router.navigateByUrl('/doctors')
    }




  }
}
