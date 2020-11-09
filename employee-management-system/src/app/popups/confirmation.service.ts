import { Injectable } from '@angular/core';
import {Observable,ReplaySubject,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  public  subject = new Subject<any>();
  
  //public empId:any;
  // public title:string;
  // public msg:any;
  public popUpData = {};


  sendClickEvent(){
      this.subject.next();
   
  }
  sendData(data:any){
      this.subject.next(data);
  }
  public getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
  setTitleMsg(tittle,msg,empId){
    this.popUpData = {tittle:tittle,message:msg,employeeId:empId};
    console.log(this.popUpData);
    //this.subject.next(this.popUpData);
  }
  getMsg(){
    return this.popUpData;
  }
  // public getMsg():Observable<String>{
  //   return this.subject.asObservable();
  //  }
  // delEmp(empId:any):Observable<any>{
  //   console.log("In Service" +empId)
  //   return this.subject.asObservable();
  // }
  }

