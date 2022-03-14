import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { patient } from 'src/app/models/patient';
import { AuthService } from 'src/app/providers/sevices/auth.service';

@Component({
  selector: 'app-receptionists',
  templateUrl: './receptionists.component.html',
  styleUrls: ['./receptionists.component.css']
})
export class ReceptionistsComponent implements OnInit {
  keyWord:string='';
  id:any=""
  id_visit:any=""
  hidden:boolean=false
  show:any



  constructor(public _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  //   this._auth.patients=[
  //     {
  //        "id":"1",
  //       "name":"alies",
  //        "age":20,
  //     "address":"30 El Serail / door east",
  //   "phone":"01589763547",
  //   "fees":200,
  //   "visits":[
  //     {
  //       "date":"2022-03-07",
  //       "time":"04:09",
  //       "type":"Examination"
  //     }

  //   ],
  //   "doctorAssessement":[
  //     {
  //       "diagnosis":"",
  //       "prescription":"",
  //       "lab":""
  //     }
  //   ],
  //   "additionalProcedures":[
  //     {
  //       "procedure":"Teeth Cleanings",
  //       "fees":1000
  //     }
  //   ]
  //     },
  //     {
  //       "id":"2",
  //      "name":"ahmed",
  //       "age":22,
  //    "address":"30 El Serail / door east",
  //  "phone":"01589883547",
  //  "fees":300,
  //  "visits":[
  //    {
  //      "date":"2022-03-07",
  //      "time":"04:09",
  //      "type":"Examination"
  //    }

  //  ],
  //  "doctorAssessement":[
  //    {
  //      "diagnosis":"",
  //      "prescription":"",
  //      "lab":""
  //    }
  //  ],
  //  "additionalProcedures":[
  //    {
  //      "procedure":"Teeth Cleanings",
  //      "fees":1000
  //    }
  //  ]
  //    },


  //   ]
     this.show=this._auth.patients
  }

  handlerpatient(Formpatient:NgForm){
    if(Formpatient.valid){
      console.log(Formpatient.value)
    console.log(this._auth.patients)
    this.id=Date.now()
    this._auth.patients.push({id:this.id,...Formpatient.value,visits:[],doctorAssessement:[],additionalProcedures:[],fees:Math.floor((Math.random() * 100) + 300)})
    console.log(this._auth.patients)
    Formpatient.resetForm()

    }

  }
  search(){
    if(this.keyWord!=""){
      // this._auth.patients=this._auth.patients.filter(obj=>{
      //   return obj.name.toLocaleLowerCase().match(this.keyWord.toLocaleLowerCase())
      // })
      this.show=this._auth.patients.filter(obj=>{
        return obj.name.toLocaleLowerCase().match(this.keyWord.toLocaleLowerCase())
      })

    }
    else{
      this.ngOnInit()
    }

  }
  add(id:any){
    console.log(id)
    this.id_visit=id
    this.hidden=true


  }
  handlerVisit(FormVisit:NgForm){
    if(FormVisit.valid){
      const index= this._auth.patients.findIndex(obj=>{return obj.id==this.id_visit})
      this._auth.patients[index].visits.push(FormVisit.value)
      console.log(this._auth.patients[index])
      this.hidden=false
    }

  }

}
