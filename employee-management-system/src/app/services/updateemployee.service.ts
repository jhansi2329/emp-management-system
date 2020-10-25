import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import BASE_URL from "../config/endPoints/urls";

import {Observable} from "rxjs";

@Injectable({
    providedIn:"root"
})

export class UpdateEmployeeService{
    constructor(public http:HttpClient){}

    public updateEmployee(data:any):Observable<any>{
        return this.http.put(BASE_URL+"/update",data);
    }
}