import { NgModule } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from '@angular/material/snack-bar';

 export const arr:any[] = [MatTableModule,
                          MatButtonModule,
                          MatIconModule, 
                          MatMenuModule,
                          MatDialogModule,
                          MatSnackBarModule];

@NgModule({
 
  imports: [arr],
  exports:[arr]
  
})
export class MaterialModule { }
