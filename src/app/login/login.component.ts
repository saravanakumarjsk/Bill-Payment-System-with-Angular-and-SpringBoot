import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbcbankService } from '../abcbank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customerObj: AbcbankService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }



  public login = {
    "userName": "",
    "password": "",
    "perferredAcc1": ""
  }

  public onSubmit() {

      console.log(this.login.userName);
      // console.log(this.login.perferredAcc1);
      this.customerObj.getLoginDetails(this.login).subscribe((result: any) => {

        if (result['perferredAcc1'] != null) {
          console.log("this is inside this method")
          console.log(result['perferredAcc1']);
          this.router.navigate(['activation']);
          this.auth.setter(true);
        }
        else {
          if (result['status'] == 200) {
            console.log(result);
            localStorage.removeItem("local_id");
            localStorage.setItem("local_id", result['CustomerID'].toString());
            localStorage.removeItem("local_name");
            localStorage.setItem("local_name", result['CustomerName']);
            //  console.log(result['UserName']);
            this.router.navigate(['register'])
            this.auth.setter(true);
          } else {
            alert("User name or password is incorrect");
            console.log(result['message']);
          }
        }


      });

  }

}