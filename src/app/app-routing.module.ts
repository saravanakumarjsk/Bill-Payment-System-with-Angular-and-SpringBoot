import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationComponent } from './activation/activation.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path:'activation', component: ActivationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
