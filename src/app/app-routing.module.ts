import { TestComponent } from './test/test.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { LoginComponent } from './login/login.component';
import { ModifyBillerComponent } from './modify-biller/modify-biller.component';
import { AddBillerComponent } from './add-biller/add-biller.component';
import { ManageComponent } from './manage/manage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationComponent } from './activation/activation.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path:'activation', component: ActivationComponent},
  { path:'manage', component: ManageComponent},
  { path:'add', component: AddBillerComponent},
  { path:'modify', component: ModifyBillerComponent},
  { path:'payment', component: MakePaymentComponent},
  { path:'view', component: ViewPaymentComponent},
  { path:'test', component: TestComponent},
  { path:'details', component: PaymentDetailsComponent},
  {path :'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
