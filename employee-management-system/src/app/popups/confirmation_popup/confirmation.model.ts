import {Component, Inject,Input,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ConfirmationService} from  '../confirmation.service';

    
@Component({
    selector: 'confirmation',
    templateUrl: './confirmation.model.html'
  })
   
  export class ConfirmationModelComponent{
    public title:String;
    public msg:String;
    public empId:any;
    public popData:any;
    constructor(public dialogRef:MatDialogRef<ConfirmationModelComponent>,
                public sharedService:ConfirmationService){
      this.popData=sharedService.getMsg();
      this.title=this.popData.tittle;
      this.msg=this.popData.message;
      this.empId=this.popData.employeeId;
    }
    delEmp(){
        this.sharedService.sendClickEvent();
    }
    onNoClick(){
      this.dialogRef.close();
    }

    ngOnInit():void{
       this.dialogRef.afterClosed().subscribe(result=>{
          if(result){
            this.dialogRef.close();
          }
       })
    }
//https://github.com/toolsknowledge/ems_angular.git
  }
  
