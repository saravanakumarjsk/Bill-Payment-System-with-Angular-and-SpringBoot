import { AuthService } from './../auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AbcbankService } from './../abcbank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private customerObj4: AbcbankService, private router: Router, private datepipe: DatePipe, private auth:AuthService) { }

  public payid: any;
  public fetchedData: any;
  public details: any;
  public date: any;
  date3: Date = new Date();

  public accno: any;

  public balance: any;
  public blllerid: any;


  ngOnInit(): void {
    this.checkValidSession();
    this.payid = localStorage.getItem("local_payid");
    this.date = this.datepipe.transform(this.date3, 'yyyy-MM-dd')

    this.details = {
      "bill_number": this.payid,
      "billerName": "",
      "paymentStatus": "",
      "billAmount": "",
      "paymentDate": "",
      "paymentDueDate": "",
      "account": {
        "acccountNumber": ""
      },
      "biller": {
        "billerId": ""
      }
    }

    if (this.payid > 0) {
      this.customerObj4.getPymtDetailsById(this.payid).subscribe((result: any) => {
        this.details.account.acccountNumber = result['acccountNumber'],
          this.accno = result['acccountNumber'],
          this.details.billerName = result['billerName'],
          this.details.paymentStatus = result['paymentStatus']
          this.details.biller.billerId = result['billerId']

        this.customerObj4.getBalByAccNum(this.details.account.acccountNumber).subscribe((result: any) => {
          this.balance = result['balance'];
        });



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


  public onSave() {
    this.customerObj4.updatePymtByBillNum(this.details).subscribe((result: any) => {
      console.log(result);

      this.router.navigate(['view']);

    });
  }

  public onDelete(){
    this.customerObj4.deletePymtById(this.payid).subscribe((result: any) => {
      console.log(result);

      this.router.navigate(['view']);

    });
  }



}
