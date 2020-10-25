import {HttpErrorResponse} from "@angular/common/http";

const errHandling = (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("Client Side Error");
    }else{
        console.log("Server Side Erroe");
    }
    
};

export default errHandling;
