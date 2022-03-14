import { Injectable } from '@angular/core';
import { patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public   patients:patient[]=[]
  public lastVisit:any
  public lastAdditional:any
  public status:boolean=false
  public doctorShowPatient:any




  constructor() { }
}
