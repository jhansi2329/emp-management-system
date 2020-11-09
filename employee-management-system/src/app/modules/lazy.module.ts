import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//in order to get comman benefits from angular framework.
import {EmployeeComponent} from '../components/employee.component';
import {MaterialModule} from '../material.module';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeService } from '../services/addemployee.service';
import { UpdateEmployeeService } from '../services/updateemployee.service';
import { DeleteEmployeeService } from '../services/deleteEmployee.service';
import { RouterModule } from '@angular/router';
import {NgHttpLoaderModule} from "ng-http-loader";
import {AddEmployeeForm} from "../components/addemployeeform.component";
import {ConfirmationModelComponent} from "../popups/confirmation_popup/confirmation.model";
import { ToastrModule } from 'ngx-toastr';
import { from } from 'rxjs';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EmployeeComponent,ConfirmationModelComponent,AddEmployeeForm],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forChild([{path:"",component:EmployeeComponent},
                            {path:"/xyz",component:ConfirmationModelComponent}])
  ],
  providers:[
    EmployeeService,
    AddEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService
  ],
  
  exports:[EmployeeComponent]
})
export class LazyModule { }
