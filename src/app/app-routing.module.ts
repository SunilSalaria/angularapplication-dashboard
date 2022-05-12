import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ProductComponent } from './pages/product/product.component';
import { StockComponent } from './pages/stock/stock.component';
import { OfferComponent } from './pages/offer/offer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddComponent } from './crud/add/add.component';
import { EditComponent } from './crud/edit/edit.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';

const routes: Routes = [

  //account
  {
    path:'login',   component:LoginComponent
  },
  {
    path:'login',   component:RegisterComponent
  },
  {
    path:'forgot-password',   component:ForgotPasswordComponent
  },

  //pages
  {
    path:'dashboard',   component:DashboardComponent
  },
  {
    path:'order',   component:OrderComponent
  },
  {
    path:'statistic',   component:StatisticComponent
  },
  {
    path:'product',   component:ProductComponent
  },
  {
    path:'stock',   component:StockComponent
  },
  {
    path:'offer',   component:OfferComponent
  },
  {
    path:'page-not-found',  component:PageNotFoundComponent
  },
  {
    path:'edit/:id',  component:EditComponent
  },
  {
    path:'add',  component:AddComponent
  },
  {
    path:'', //use empty route for set default page property
    pathMatch:'full',
    redirectTo: 'login'
   },
   //when user enter wrong url it will redirect set as default page
   {
     path: '**',
     redirectTo: 'page-not-found'
   }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
