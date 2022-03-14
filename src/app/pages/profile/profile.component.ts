import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/providers/sevices/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  idShown:any
  patient:any
  additional:boolean=false

  constructor(private _route:ActivatedRoute,public _auth:AuthService) { }

  ngOnInit(): void {
    this.idShown=this._route.snapshot.params?.['id']
    const index =this._auth.patients.findIndex(obj=>{return obj.id==this.idShown})
    this.patient=this._auth.patients[index]
    this._auth.lastVisit=this.patient.visits[this.patient.visits.length -1]
    // this._auth.doctorShowPatient=this.patient
    console.log(this._auth.lastVisit)
    if(this.patient.additionalProcedures.length!=0){
      this._auth.lastAdditional=this.patient.additionalProcedures[this.patient.additionalProcedures.length -1]
      this.additional=true
    }


  }

  logout(){
    this._auth.status=false
  }

}
