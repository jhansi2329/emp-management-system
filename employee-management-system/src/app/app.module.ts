import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './components/employee.component';

import { lazyRouts } from './routes/app.routes';
import { NgHttpLoaderModule } from "ng-http-loader";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    lazyRouts,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot()
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
