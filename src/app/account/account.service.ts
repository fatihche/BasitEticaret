import { Injectable,Inject } from '@angular/core';
import {Http,Headers,RequestOptions,Response} from  "@angular/http";
import {Observable} from 'rxjs/Observable'


@Injectable()
export class AccountService {
 private loggedIn=false;
  constructor(@Inject('api') private apiUrl,private http:Http) { }

 login(username,password):Observable<boolean> {
  let url:string=this.apiUrl+"/account/login";
  
  let headers=new Headers();
  //kullanıı adı şifre formatı web api(arka plan .net) tarafında bu formatta yapılmış=> fatih:123456
  headers.append("Authorization",btoa(username+":"+password));//btoa ile username passwordu base64 formatına çevirip gönderiyoruz.

  // ben şimdi  bir reques options yapıp bu headera göndericem.
  var requestOptions=new RequestOptions({headers:headers});
  return this.http.post(url,JSON.stringify({username,password}),requestOptions)
  .map(res=>res.json())
  .map(res=>{
  if(res){
    localStorage.setItem("isLogged",res);//localStorage session gibi bir yapı.
    this.loggedIn=true;
    return res;
  }
  });//kullanıcı login olabildiyse yani true olarak döndüyse kullanıcının uygulama boyunca login olduğunu göstermem gerekiyor.
//hem responsu map ettik ve ettiğimiz mapi localsorca attık .
//sonuc olarak ne yaptık ?=>bir kullanıcı password oluşturduk dışardan gelen.onu post operasyonuyla url'e map ettik.
//ve map işlemiyle bizim apimizin döndürdüğü değeri yakaladık true veya false dönüyor.
//ilk returnümüz true false dönüyor. biz de bu dönen boolean sonuçlar için  bir map işlemi yaptık.
//eğer true ise localstorage ekledik.
 }
logOut(){
localStorage.removeItem('isLogged');//kullanıcı çıkış yaparsa sessiondan siliyoruz.
this.loggedIn=false;
}
 isLogin(){
   return this.loggedIn;//kullanıcı sürekli  login mi diye kontrol edicek
 }
}
