import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/sevices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this._auth.status=false
  }

}
