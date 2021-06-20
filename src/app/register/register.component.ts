import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { AbcbankService } from './../abcbank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private customerObj: AbcbankService, private router: Router, private auth:AuthService) { }

  public customer_id: any;
  public acc: any;

  public userName: any;
  public perferredAcc1: any;
  public perferredAcc2: any;

  public temp = "select your prefered account 2"
  public account: any = [];
  public customer: any = [];

  ngOnInit(): void {
    this.checkValidSession();
    
    this.acc = {
      "check": ""
    }


    this.customer_id = localStorage.getItem("local_id");
    // console.log(this.customer_id);
    this.userName = localStorage.getItem("local_name");
    // console.log(this.userName);

    if (this.customer_id > 0) {
      this.customerObj.getCustomerRegDetailsById(this.customer_id).subscribe(result => this.account = result);
    }


    this.customer = {
      "country": "",
      "occupation": "",
      "gender": "",
      "city": "",
      "lastName": "",
      "billPayRegistered": "",
      "salary": "",
      "password": "",
      "pin": "",
      "dob": "",
      "aadhar": "",
      "address": "",
      "perferredAcc1": "",
      "perferredAcc2": "",
      "state": "",
      "userName": "",
      "customer_id": "",
      "mobileNumber": "",
      "pan": "",
      "firstName": "",
      "email": ""
    }


    if (this.customer_id > 0) {
      this.customerObj.getOneCustomerById(this.customer_id).subscribe((result: any) => {
        console.log(result);
        this.customer.country = result['country'],
          this.customer.occupation = result['occupation'],
          this.customer.gender = result['gender'],
          this.customer.city = result['city'],
          this.customer.lastName = result['last_name'],
          this.customer.billPayRegistered = result['bill_pay_registered'],
          this.customer.salary = result['salary'],
          this.customer.password = result['password'],
          this.customer.pin = result['pin'],
          this.customer.dob = result['dob'],
          this.customer.aadhar = result['aadhar'],
          this.customer.address = result['address'],
          this.customer.perferredAcc1 = result['perferredAcc1'],
          this.customer.perferredAcc2 = result['perferredAcc2'],
          this.customer.state = result['state'],
          this.customer.userName = result['customer_name'],
          this.customer.customer_id = result['customer_id'],
          this.customer.mobileNumber = result['mobile_number'],
          this.customer.pan = result['pan'],
          this.customer.firstName = result['first_name'],
          this.customer.email = result['email']
      });

    }
  }

  private checkValidSession() {
    if(this.auth.getter() == false)
    {
      this.router.navigate(['login']);
    }
  }

  public signOut(){
    this.auth.setter(false);
    this.router.navigate(['login']);
  }


  public check = false;

  public clicked() {
    this.check = true;
  }

  public sub = false;

  public submit() {
    this.sub = true;
  }


  public onSubmit() {

    console.log(this.customer);
    console.log("this is inside the result");

    this.customerObj.updateCustomerPrefferedAcc(this.customer).subscribe((result1: any) => {
      console.log(result1);
      console.log("this is inside the result");
      if (result1['status'] == 200) {
        this.router.navigate(['activation'])
      } else {
        alert("Something went wrong");
        console.log(result1['message']);
      }
    });
  }


}
