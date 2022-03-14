import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/sevices/auth.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  hiddenDiagnosis:boolean=false
  hiddenProcedure:boolean=false
  idDiagnosis:any
  idProcedure:any

  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
  }
  addDiagnosis(id:any){
    this.hiddenDiagnosis=true
    this.idDiagnosis=id
  }
  addProcedure(id:any){
    this.hiddenProcedure=true
    this.idProcedure=id

  }
  handlerDiagnosis(FormDiagnosis:NgForm){
    console.log(FormDiagnosis.value)
    if(FormDiagnosis.valid){
      const index= this._auth.patients.findIndex(obj=>{return obj.id==this.idDiagnosis})
      this._auth.patients[index].doctorAssessement.push(FormDiagnosis.value)
      console.log(this._auth.patients[index])
      this.hiddenDiagnosis=false
    }
  }
  handlerProcedure(FormProcedure:NgForm){
    console.log(FormProcedure.value)
    if(FormProcedure.valid){
      const index= this._auth.patients.findIndex(obj=>{return obj.id==this.idProcedure})
      this._auth.patients[index].additionalProcedures.push(FormProcedure.value)
      console.log(this._auth.patients[index])
      this.hiddenProcedure=false
    }

  }
  logout(){
    this._auth.status=false
  }

}
