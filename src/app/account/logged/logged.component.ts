import { Component, OnInit,DoCheck } from '@angular/core';
import {Router} from '@angular/router'
import { AccountService } from "../account.service";
//burada biz kullanıcının login olmasna göre bir kontrol mekanizması yapmalıyız.
 
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
  
})
export class LoggedComponent implements DoCheck {//login olan kişi başka componenti desteklesin diye  dochechk
  
//sürekli olarak biz burda tanımladığımız değişkenleri başka bir yerde değiştği zaman bunun da değişmesi gerektiğine dair aslında
//bir subscribtion  yapıyoruz.
isLogged=false;
  constructor(private accountService:AccountService,
              private router:Router) { }
 ngDoCheck(): void {//kişi bir sayfada login oldu.fakat login olduğuna dair bilgi sol taraftaki bilgide geçiyor olması gerekiyor
    this.isLogged=this.accountService.isLogin();

}
  logOut(){
    this.accountService.logOut();
    this.router.navigate(["account"]);
  }
}
