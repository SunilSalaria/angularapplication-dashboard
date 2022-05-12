import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ProductComponent } from './pages/product/product.component';
import { StockComponent } from './pages/stock/stock.component';
import { OfferComponent } from './pages/offer/offer.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddComponent } from './crud/add/add.component';
import { EditComponent } from './crud/edit/edit.component';
import { ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//fot toaster
import { ToastrModule } from 'ngx-toastr';
//for pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    DashboardComponent,
    OrderComponent,
    StatisticComponent,
    ProductComponent,
    StockComponent,
    OfferComponent,
    PageNotFoundComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    ToastrModule.forRoot({
      preventDuplicates:true
    }),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
