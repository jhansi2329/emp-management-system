import { NgModule } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';


 export const arr:any[] = [MatTableModule,
                          MatButtonModule,
                          MatIconModule, 
                          MatMenuModule,
                          MatDialogModule,
                          MatSnackBarModule,
                          MatFormFieldModule,
                          MatInputModule,
                          MatSelectModule,
                          MatDatepickerModule,
                          MatNativeDateModule,
                          MatRadioModule,
                          MatChipsModule
                          ];

@NgModule({
 
  imports: [arr],
  exports:[arr]
  
})
export class MaterialModule { }
