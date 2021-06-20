import { AuthService } from './../auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AbcbankService } from './../abcbank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-biller',
  templateUrl: './add-biller.component.html',
  styleUrls: ['./add-biller.component.css']
})
export class AddBillerComponent implements OnInit {

  constructor(private customerObj1: AbcbankService, private router: Router, private datepipe: DatePipe, private auth:AuthService) { }

  public customer_id: any;

  public categorey: any = ["Insurence", "Food", "Water", "Electricity"];

  public addBiller: any = [];

  date3:Date=new Date();

  public date:any;
 


  ngOnInit(): void {
    this.checkValidSession();
    this.customer_id = localStorage.getItem("local_id");
    this.date = this.datepipe.transform(this.date3, 'yyyy-MM-dd')

    this.addBiller = {
      "billerName": "",
      "billerAddress": "",
      "billerCategorey": "",
      "city": "",
      "status": "active",
      "pincode": "",
      "createBillerDate": this.date,
      "customer":
      {
        "customer_id": this.customer_id
      }
    }

    console.log(this.addBiller);

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


  public onSubmit() {

    console.log(this.addBiller);
    this.customerObj1.addNewBiller(this.addBiller).subscribe((result1: any) => {
      console.log(result1);
      console.log("this is inside the result");
      if (result1['status'] == 200) {
        this.router.navigate(['manage'])
      } else {
        alert("Something went wrong");
        console.log(result1['message']);
      }
    });

  }

}
