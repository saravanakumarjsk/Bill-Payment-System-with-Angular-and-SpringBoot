import { AddBillerComponent } from './add-biller/add-biller.component';
import { ManageComponent } from './manage/manage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationComponent } from './activation/activation.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path:'activation', component: ActivationComponent},
  { path:'manage', component: ManageComponent},
  { path:'add', component: AddBillerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
