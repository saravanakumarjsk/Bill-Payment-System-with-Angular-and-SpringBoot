import { AuthService } from './../auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AbcbankService } from './../abcbank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {


  public date: any;
  date3: Date = new Date();
  public customer_id: any;
  public biller_id: any;


  todayDate: Date = new Date();

  constructor(private customerObj4: AbcbankService, private router: Router, private datepipe: DatePipe, private auth:AuthService) { }

  public pfaccounts: any = [];
  public balance: any;
  public billerArr: any = [];
  public makePayment: any;
  public map = new Map();

  public curr_biller_id: any;

  // get the stored account number
  public selected: number = 0;
  public billSelected: String = "";

  selectedChanged() {
    this.fetchBalByAccNum();
  }

  getBillerId() {
    this.fetchBillerIdByBillerName();
  }



  ngOnInit(): void {
    this.checkValidSession();
    this.date = this.datepipe.transform(this.date3, 'yyyy-MM-dd')
    this.customer_id = localStorage.getItem("local_id");


    console.log(this.todayDate);

    this.fetchPreferredAcc();
    this.fetchBillerNameByCustId();

    this.makePayment = {
      "billAmount": "",
      "paymentDueDate": "",
      "paymentDate": this.date,
      "paymentStatus": "",
      "account": {
        "acccountNumber": this.selected
      },
      "biller": {
        "billerId": this.billSelected
      }
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


  fetchPreferredAcc() {
    this.customerObj4.getCustPrefAccById(this.customer_id).subscribe(result => this.pfaccounts = result);
  }

  fetchBillerNameByCustId() {
    this.customerObj4.getBillerNameByCustId(this.customer_id).subscribe(result => this.billerArr = result);

  }

  fetchBalByAccNum() {
    this.customerObj4.getBalByAccNum(this.selected).subscribe((result: any) => {
      this.balance = result['balance'];
      console.log(this.balance);
    });
  }



  fetchBillerIdByBillerName() {
    this.customerObj4.getBillerIdByBillerName(this.billSelected).subscribe((result: any) => {
      this.makePayment.biller.billerId = result['billerId'];
      // console.log(this.curr_biller_id);
    })

  }

  public onSubmit() {
    console.log("the method is inside the submit");
    console.log(this.makePayment);
    this.customerObj4.insertPaymentDetails(this.makePayment).subscribe((result: any) => {
      this.router.navigate(['activation']);
      console.log(result);
    });
  }



}
