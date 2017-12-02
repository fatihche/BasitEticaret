import { Injectable } from '@angular/core';
import {Product} from '../product/product'
import {CartItem} from './cart-item'
import { CART_ITEM_LIST } from "./cart-item-list";


@Injectable()
export class CartService {
  cartItems:CartItem[];
  constructor() { }

  addToCart(product:Product){
  var addedItem=CART_ITEM_LIST.find(t=>t.product.productId==product.productId);
  if(addedItem){
    addedItem.quantity+=1;
  }
  else{
    let cartItem=new CartItem();//let'in anlamı sadece bu scope içinde kayıtlı olduğunu gösterir.
    cartItem.product=product;
    cartItem.quantity=1;
    CART_ITEM_LIST.push(cartItem);//push:listeye ekleme
  }
  }
  list():CartItem[]{
    return CART_ITEM_LIST;
 
  }
  clear(){
    CART_ITEM_LIST.splice(0,CART_ITEM_LIST.length);//splice silmedir .0=sıfırıncı indexten itibaren kaç tane sileceğini belirler(length kadar)

  }
  removeFromCart(product:Product){
  var addedItem=CART_ITEM_LIST.find(t=>t.product.productId==product.productId);//silincek olan itemi bulduk
  var indexNo=CART_ITEM_LIST.indexOf(addedItem);//silinek olan itemin index(yani kaçıncı sırada olduğunu bulduk)
  if(indexNo!=-1){//-1 değilse yani sepette var ise 
    CART_ITEM_LIST.splice(indexNo,1);//kaçıncı indexten itibaren, 1
  }
  }
//bizim bu servisimiz global olmak zorunda çünkü uygulama boyunca kullanıcaz o yüzden appmodule injecte edicez.

}
