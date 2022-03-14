import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/sevices/auth.service';

@Component({
  selector: 'app-login-recptionist',
  templateUrl: './login-recptionist.component.html',
  styleUrls: ['./login-recptionist.component.css']
})
export class LoginRecptionistComponent implements OnInit {

  constructor(private _router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
  }
  handlerLogin(FormLogin:NgForm){
    if(FormLogin.valid) {
      this._auth.status=true
      this._router.navigateByUrl('/receptionists')}

  }

}
