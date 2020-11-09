//Injectable used to creat services
import {Injectable} from "@angular/core";//to creat custome services

//import HttpClient - used to connect to server
import {HttpClient} from "@angular/common/http";

//import BASE_URL
import BASE_URL from "../config/endPoints/urls";
import { Observable } from 'rxjs';


@Injectable({
    providedIn :"root"
})
export class AddEmployeeService{
    constructor(public http:HttpClient){}

    public getEmployees(data:any):Observable<any>{
        
       // return this.http.post(BASE_URL+"insert",data);
        return  this.http.post(BASE_URL+"insert",data);
    }

};

