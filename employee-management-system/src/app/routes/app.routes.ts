import {LazyModule} from "../modules/lazy.module";
import {ModuleWithProviders} from "@angular/core";//to impliment the lazyloading concept
import {Routes,RouterModule} from "@angular/router";

export const appRoutes:Routes=[
    {path:"",loadChildren:():any=>import("../modules/lazy.module").then(obj=>obj.LazyModule)},
    {path:"xyz",loadChildren:():any=>import("../popups/confirmation_popup/confirmation.model").then(obj=>obj.ConfirmationModelComponent)}
];
export const lazyRouts:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);