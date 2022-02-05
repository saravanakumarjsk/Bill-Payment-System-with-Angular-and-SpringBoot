import { AuthService } from './../auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AbcbankService } from './../abcbank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {

  constructor(private customerObj4: AbcbankService, private router: Router, private datepipe: DatePipe, private auth: AuthService) { }

  public customer_id: any;

  public table: any = [];
  public date: any;
  date3: Date = new Date();



  ngOnInit(): void {
    this.checkValidSession();
    this.customer_id = localStorage.getItem("local_id");
    this.date = this.datepipe.transform(this.date3, 'yyyy-MM-dd')

    this.fetchCatByCustId();
    this.fetchTableByCustomerId();

  }

  private checkValidSession() {
    if (this.auth.getter() == false) {
      this.router.navigate(['login']);
    }
  }

  public signOut() {
    this.auth.setter(false);
    this.router.navigate(['login']);
  }

  public categorey: any = [];
  public statusArr: any = ["active", "inactive"];

  public data: any;

  fetchCatByCustId() {
    this.customerObj4.getPmtCategoreyByCustId(this.customer_id).subscribe(result => this.categorey = result);
  }

  fetchTableByCustomerId() {
    this.customerObj4.getHistoryTableByCustId(this.customer_id).subscribe(result => this.table = result);
  }

  public viewPayment = {
    "bill_number": "",
    "billerCategorey": "",
    "billerId": "",
    "status": "",
    "paymentDate": "",
    "acccountNumber": "",
    "billerName": "",
    "billAmount": "",
    "from": "",
    "to": ""
  }

  public onModify(id: number) {
    this.router.navigate(['details']);
    localStorage.removeItem("local_payid");
    localStorage.setItem("local_payid", id.toString());
    console.log(id);

  }



}
