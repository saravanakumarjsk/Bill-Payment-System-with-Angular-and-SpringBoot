import { AuthService } from './../auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AbcbankService } from './../abcbank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-biller',
  templateUrl: './modify-biller.component.html',
  styleUrls: ['./modify-biller.component.css']
})
export class ModifyBillerComponent implements OnInit {

  constructor(private customerObj4: AbcbankService, private router: Router, private auth:AuthService, private datepipe: DatePipe) { }

  public updateBiller: any;
  date3: Date = new Date();

  public date: any;
  public customer_id: any;
  public biller_id: any;
  public categorey: any = ["Insurence", "Food", "Water", "Electricity"];

  ngOnInit(): void {
    this.checkValidSession();
    this.customer_id = localStorage.getItem("local_id");
    this.date = this.datepipe.transform(this.date3, 'yyyy-MM-dd')
    this.biller_id = localStorage.getItem("local_bid");
    console.log(this.biller_id);

    this.updateBiller = {
      "billerId": "",
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

    if (this.biller_id >= 0) {
      this.customerObj4.getBillerByBillerId(this.biller_id).subscribe((result: any) => {
        console.log(this.biller_id);
        console.log(result);
        this.updateBiller.billerId = result['billerId'],
          this.updateBiller.billerName = result['billerName'],
          this.updateBiller.billerAddress = result['billerAddress'],
          this.updateBiller.billerCategorey = result['billerCategorey'],
          this.updateBiller.city = result['city'],
          this.updateBiller.status = result['status'],
          this.updateBiller.pincode = result['pincode']
        this.updateBiller.createBillerDate = result['createBillerDate']
      })
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

  public onSubmit() {
    console.log(this.updateBiller);
    this.customerObj4.updateBiller(this.updateBiller).subscribe((result: any) => {

      this.router.navigate(['manage']);


    });
  }

}
