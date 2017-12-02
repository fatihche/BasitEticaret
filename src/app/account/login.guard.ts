//guard sayfalar özellikle rol bazlı sistemlerde kullanılması oldukça uygundur
//mesela biz sayfalar arası yada sayfa içi işlem yaparken kullanıcı login mi değil mi diye kontrol edebiliriz.
//ayrıca bu guardlar servis gibi işlerler o yüzden injectable import etmemiz gerekir.
import {Injectable} from "@angular/core"
import  {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from "@angular/router" ;//bir sayfaya girildiğinde onun login olup olmadığını kontrol etmek istiyorum.sayfaya giridldiğinde yani sayfa activadet edildiğinde.
import { AccountService } from "./account.service";
//CanActivate aslında bir implementasyon ,ActivatedRouteSnapshot bu kişinin gitmek istediği route.RouterStateSnapshot kişinin geldiği route.

@Injectable()//guardlar servis gibi olduğundan
export class LoginGuard  implements CanActivate{//bunun bir loginGuard olabilmesi için  yani sisteme girildiği zmana çalışması için CanActivate interaceyi implemente etmesi  gerekir.
   
    constructor(private accountService:AccountService,private router:Router) {
        
        
    }
    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{//eğer login değilse gelen state'nin durumunu kopyalıyor(mesela sepet sayfasında0).sonra login yaptıktan sonra o sepet sayfasına otomatik gidiyor.
        let logged=this.accountService.isLogin();//ActivatedRouteSnapshot gidilmek istenene işaret eder.RouterStateSnapshot ise bunun geldiği yeri tutacaktır.
        if(logged){
            return true;
        }
        
        this.router.navigate(["account"],{queryParams:{returnUrl:state.url}})//burdaki state kişinin geldiği route.returnUrl ise account componentteki parametre.
        
        return false;
        
    }
//guard classımızı yazdık.şimdi de eğer kullancı sepet detayına gitmek isterse önce buraya yönlendirmemiz gerekiyor.
//o yüzden app modulede routerda bunu ayarlamamız lazım.
}