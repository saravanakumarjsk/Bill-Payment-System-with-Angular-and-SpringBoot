import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ActivationComponent } from './activation/activation.component';
import { ManageComponent } from './manage/manage.component';
import { AddBillerComponent } from './add-biller/add-biller.component';
import { ModifyBillerComponent } from './modify-biller/modify-biller.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ActivationComponent,
    ManageComponent,
    AddBillerComponent,
    ModifyBillerComponent,
    MakePaymentComponent,
    ViewPaymentComponent,
    PaymentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
