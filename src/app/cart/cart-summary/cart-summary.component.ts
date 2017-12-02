import { Component, OnInit,DoCheck } from '@angular/core';
import { CartService } from "../cart.service";
import { CartItem } from "../cart-item";


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit,DoCheck {

 
  constructor(private cartService:CartService) { }
  
  totalCartItem:number;
  totalCartItemPrice:number;
  cartItems:CartItem[];


  ngOnInit() {
   this.cartItems=this.cartService.list();

  }
 ngDoCheck(): void {
    this.totalCartItem=this.cartService.list().reduce((a,b)=>a+b.quantity,0);//biz burda servisimizin içnerisindeki list metoduna erişip
    this.totalCartItemPrice=this.cartService.list().reduce((a,b)=>a+b.quantity*b.product.unitPrice,0);                                                                       //ne kadar eleman olduğunu bulmak istiyoruz.
                                                     //a dönüş değerimiz b ise listedeki her bir eleman.burdaki 0 a'nın başlangıç değeri.
                                                     //yani a 0'dan başlıycak  ve b'nin quantity değerini topluyoruz.ve sonuç olarak a totalCartItem'a eşir oluyor.
  }

  //ngOnInit,sayfa yüklendiğinde yani sayfa load olduğunda demek.angularda life cicylede docheck var
                     //bu event uygulama boyunca birr yerde kendi içerisinde tanımlanmış deüerlere subscripe yani abone oluyor.
                     //yani bir değişiklik olduğunda yenileniyor. yani burayı ilgilendiren bir durum olunca sürekli yenilniyor asenkron mantığı v ar yani.


}
