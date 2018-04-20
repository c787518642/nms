import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error:Response) {
        if(error.status===302){
            // 超时
            console.log("超时")
            location.href="./"
        }
       
      // do something with the exception
    }
  }