import {Component,ViewChild} from"@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {ConfirmationService} from '../popups/confirmation.service';
import{AddEmployeeService} from '../services/addemployee.service';

@Component({
    selector:"addemp",
    templateUrl: "./addemployeeform.component.html"    
  })
  export class AddEmployeeForm{

    employeeDetails:FormGroup;
    Languages:string[] = [];  
    
    @ViewChild('chipList', { static: true }) chipList;
   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
   visible = true;
   selectable = true;
   removable = true;
   addOnBlur = true;

    constructor(public fb:FormBuilder,
                public sharedService:ConfirmationService,
                public addEmp:AddEmployeeService){
      this.employeeDetails = this.fb.group({
       // empId:['',[Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
        Name : ['',Validators.required],
        Age:['',Validators.required],
        Salary:['',Validators.required],
        Department:['',Validators.required],
        DOB:['',Validators.required],
        Gender:['male',Validators.required],
        languages : [this.Languages]
      });
    }
    date(event){
      var convertDate = new Date(event.target.value).toISOString().substring(0, 10);
      this.employeeDetails.get('DOB').setValue(convertDate, {
      onlyself: true
      });
    }
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
      console.log(value);
      // Add language
      if ((value || '').trim() && this.Languages.length < 5) {
        this.Languages.push(value.trim())
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }
    }

    remove(subject): void {
      const index = this.Languages.indexOf(subject);
      if (index >= 0) {
        this.Languages.splice(index, 1);
      }
    } 
    register(data:any):void{
        console.log(data);
        this.sharedService.sendData(data);
       
    }
  }