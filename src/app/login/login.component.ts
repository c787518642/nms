import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hadError = false;
  rem_user: boolean;
  username_empty = false;
  pwd_empty = false
  default_username = "";
  upcase = false;
  errorInfo: string;
  isLogin=false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
    // private routes:Routes
  ) { }
  ngOnInit() {
    let isLogin = this.route.snapshot.paramMap.get("logout");
    if (isLogin === "logout") {
      // 清除登录信息
      this.loginService.logout().subscribe((data)=>{
        console.log('退出系统')
      })

    }
    this.is_rem_user();
    if (this.rem_user) {
      this.default_username = localStorage.getItem('username')
    } else {
      this.default_username = ""
    }
  }
  is_rem_user() {
    if (localStorage.getItem("is_rem") === "true") {
      this.rem_user = true;
    } else {
      this.rem_user = false;
    }
  }
  checkboxClick(event) {
    event.preventDefault()
    this.rem_user = !this.rem_user;
    localStorage.setItem("is_rem", String(this.rem_user))
  }
  changed(f) {
    this.hadError = false;
  }
  resetStatus() {
    this.hadError = false;
  }
  upCase(f) {
    const str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    if (str.includes(f.key)) {
      if (f.key.toLowerCase() !== f.key) {
        this.upcase = true;
      } else {
        this.upcase = false;
      }
    }
  }
  onEnter(){

    console.log("enter")
  }
  onSubmit(f) {
    var input = document.getElementById("pwd");
    input.blur();
    // var obj={name:"1112",pwd:"xxx"};
    // obj.
    // toForm(obj);
    this.username_empty = false
    this.pwd_empty = false;
    let jsonObj = f.value;
    if (jsonObj["username"] == '') { this.username_empty = true; return false }
    if (jsonObj["pwd"] == '') { this.pwd_empty = true; return false }
    // http
    this.isLogin=true;
    this.loginService.login(jsonObj).subscribe(data => {
      if (data['code'] && data['code'] == 1) {
        // if成功,跳转
        this.router.navigate(['./pages'])
        // if登录成功记住用户名
        localStorage.setItem("username", jsonObj.username)
      } else {
        // if失败显示错误
        this.isLogin=false;
        this.hadError = true;
        this.errorInfo = data['message'] || "异常错误"
      }
    })

  }
}
