import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/models/doctors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keyWord:string='';
  doctors:Doctors[]=[]
  constructor() { }

  ngOnInit(): void {
    this.doctors=[
      {
        "name":"alaa",
        "days":[

            {  "day":"Saturday",
              "date":"12pm-5pm"
            },
            {  "day":"Sunday",
           "date":""
            },
            {  "day":"Monday",
            "date":"12pm-5pm"
            },
            {  "day":"Tuesday",
               "date":"5pm-8pm"
            },
            {  "day":"Wednesday",
           "date":""
            },
            {  "day":"Thursday",
           "date":"12pm-5pm"
           },
           {  "day":"Friday",
              "date":"5pm-8pm"
           },



         ]
      },

      {
        "name":"ali",
         "days":[

            {  "day":"Saturday",
               "date":"1pm-7pm"
            },
            {  "day":"Sunday",
            "date":"1pm-7pm"
            },
            {  "day":"Monday",
            "date":"12pm-5pm"
            },
            {  "day":"Tuesday",
               "date":""
            },
            {  "day":"Wednesday",
           "date":"5pm-8pm"
            },
            {  "day":"Thursday",
           "date":"12pm-5pm"
           },
           {  "day":"Friday",
              "date":""
           },



         ]
      },


    ]
  }

  search(){
    if(this.keyWord!=""){
      this.doctors=this.doctors.filter(obj=>{
        return obj.name.toLocaleLowerCase().match(this.keyWord.toLocaleLowerCase())
      })

    }
    else{
      this.ngOnInit()
    }

  }

}
