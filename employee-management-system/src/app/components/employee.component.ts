import { Component, OnInit ,AfterViewInit,ViewChild,ContentChild,ViewChildren,QueryList,AfterContentInit, Query, ElementRef} from '@angular/core';
import { DeleteEmployeeService } from '../services/deleteEmployee.service';
import { EmployeeService } from '../services/employee.service';
import { UpdateEmployeeService } from '../services/updateemployee.service';
import{AddEmployeeService} from '../services/addemployee.service';
import errHandling  from "../config/error/errorHandling";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ConfirmationModelComponent} from "../popups/confirmation_popup/confirmation.model";

//import matTableDataSource from
import {MatTableDataSource} from "@angular/material/table";
import { ToastrService } from 'ngx-toastr';

import {ConfirmationService} from './../popups/confirmation.service';
import {Subscription} from 'rxjs';


@Component({
  selector:"ems",
  templateUrl: "./employee.component.html",
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{

  public records:any;
  public unSub:any;
  public empId:any;
  
 // @ViewChild(ConfirmationModelComponent,{static:true}) test:ConfirmationModelComponent;
  

  public dataSource:MatTableDataSource<any>;
  public displayedColumns:string[]= ["Check","Name","Age","empId","Salary","Department","DOB","Gender","languages","Actions"];
  
  clickEventSubscription:Subscription;
  constructor(public allEmployees:EmployeeService,
              public addEmployee:AddEmployeeService,
              public updateEmployee:UpdateEmployeeService,
              public deleteEmployee:DeleteEmployeeService,
              public dialog:MatDialog,
              public toastrService: ToastrService,
              public sharedService:ConfirmationService) {                 
                
              }
                
              
  ngOnInit(): void {
   this.unSub= this.allEmployees.getEmployees().subscribe((posRes)=>{
      this.records = posRes;
      this.dataSource=new MatTableDataSource(this.records);
      
      
    },errHandling);
    // this.clickEventSubscription=this.sharedService.getClickEvent().subscribe((event:Event)=>{
    //   // console.log((event.target as HTMLButtonElement).value);
    //   //     if((event.target as HTMLButtonElement).value=="delRecord"){
    //   //         this.deleteEmp();
    //   //     }
    //   // // if(event){
    //   // //   this.deleteEmp();
    //   // // }
               
    //    });
      
    this.clickEventSubscription=this.sharedService.getClickEvent().subscribe((data)=>{
        console.log("In employee Subscription");
        if(data){
          this.registerEmp(data);
        }else{
          this.deleteEmp();
        }
    }) ;
  }
  
  
  public employeeId:any;
  
  
  delEmp(empId){
    
    this.employeeId=empId;
    this.sharedService.setTitleMsg("Delete!!!","Do You Want To Delete?",this.employeeId);
    let dialogRef= this.dialog.open(ConfirmationModelComponent);
    
    // dialogRef.afterClosed().subscribe((result)=>{
    //   if(result){
    //     this.deleteEmp();
    //   }
    // })
         
   }
   registerEmp(data){
    this.addEmployee.getEmployees(data).subscribe((posRes)=>{
      console.log(posRes);
      if(posRes.insert === "success"){
          this.records.push(posRes.insertedRec);
          this.dataSource = new MatTableDataSource(this.records);
      }
   },errHandling);
   }
   deleteEmp(){
     console.log("In deleteEmp"+this.employeeId);
     this.deleteEmployee.deleteEmployee({"empId":this.employeeId}).subscribe((posRes)=>{
       console.log(posRes);
      if(posRes.delete == "success"){
            let matched_index = this.records.findIndex((element,index)=>{
               return element.empId == this.employeeId;
               
        });
        
        console.log(matched_index);
        this.records.splice(matched_index,1);
        this.toastrService.success('Successfully Deleted','', {
          timeOut: 3000,
        });
        this.dataSource=new MatTableDataSource(this.records);
      } 
     
  },errHandling);

   }
 
  ngOnDestroy(){
    this.unSub.unsubscribe();
    this.clickEventSubscription.unsubscribe();
  }
}
