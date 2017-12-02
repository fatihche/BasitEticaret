import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import  {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import{Routes,RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {SimpleNotificationsModule,NotificationsService} from 'angular2-notifications'
import{CartService} from './cart/cart.service';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe'
import { AccountService } from "./account/account.service";
import { LoginGuard } from "./account/login.guard";
import { PendingChangesGuard } from "./guards/pending.changes.guard";



const appRoutes:Routes=[//routler nasıl bir route geldiğinde hangi sayfaya gideyim dediğimiz olaydır.
  {
    path:"",//anasayfaya bir istek geldiğinde
    redirectTo:"products",//productsa git
    pathMatch:"full"//adresin path'te olması gerektiği gibi anlamına gelir. 

  },
  {
    path:"products",
     component:ProductComponent//products diye bir şey gelirse product componenti aç
  },
  {
    path:"products/:seoUrl",//parametre geldiğinde iki noktayla yazıyoruz.
    component:ProductComponent//products diye bir şey gelirse product componenti aç
  },
  {
    path:"my-cart",
    component:CartComponent
  },
  {
    path:"shipping-detail",
    component:ShippingDetailComponent,canActivate:[LoginGuard],canDeactivate:[PendingChangesGuard]
  },
  {
     
    path:"account",
    component:AccountComponent
  
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  SimpleNotificationsModule.forRoot()
  ],
  providers: [
    {provide:"api",useValue:"http://northwindapi.azurewebsites.net/api"},
    NotificationsService,
    CartService,
    AccountService,
    LoginGuard,
    PendingChangesGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
