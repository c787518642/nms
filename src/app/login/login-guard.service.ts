import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(
    private router:Router,
    private http:HttpClient
  ) { }
  canActivate(){
    this.http.post('/tw-cmts-server/abc',{}).subscribe(data=>{
      console.log(data)
    },error=>{
      console.log(error)

    }
  )
    if(Math.random()>0){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
