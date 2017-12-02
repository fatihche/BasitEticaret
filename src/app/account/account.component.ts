import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms"
import {Router,ActivatedRoute} from '@angular/router'//bir sayfayı bir kullanıcının görebilmesi için login olması lazım o yüzden o sayfaya gittiğinde bu sayfaya yönlendiricez.
import { AccountService } from "./account.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']

})
export class AccountComponent implements OnInit {
  message: string;
  returnUrl: string;
  constructor(private accountService:AccountService,
              private activatedRoute:ActivatedRoute,//yani kişinin geldiği routu okuyabilmek için.
              private router:Router) { } 

  ngOnInit() {
   this.activatedRoute.queryParams.subscribe(params=>{
     this.returnUrl=params["returnUrl"]||"products";//returnUrl gelen parametre varsa parametredeki returnUrldir yoksa direk olarak productstur.
   }) //bu kullanıcı başka sayfadan geliyor olabilir.
  }
  loginUser(form:NgForm){
    this.accountService.login(form.value.user,form.value.password).subscribe(t=>{
     if(t){
       this.router.navigateByUrl(this.returnUrl);//username password doğru ise gelen url'e git.
     }
      else{
        this.message="username or password is incoorect";
      }
    });
  }
  //bir servis metodu observable oluyor. o yüzden bu tip metorlara abone yani subscribe() olmamız gerekiyor
  //bu komponente gelindiğinde ben öncelikle bu kullanıcı nerden gelmiş onu okuyorum.

}
