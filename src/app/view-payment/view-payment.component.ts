import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  public categorey: any = ["Insurence", "Food", "Water", "Electricity"];
  public status: any = ["Active", "Inactive"];
  public biller:any = ["Saravana", "Sarath", "William", "Sathish"]

  public data: any;

  public getData() {
    this.data = [
      { "date": "12 / 2 / 2077", "acc": "89398478589", "biller": "james", "amount": 75000, "categorey": "active", "status": "yes" },
      { "date": "12 / 2 / 2077", "acc": "89398478589", "biller": "james", "amount": 75000, "categorey": "active", "status": "yes" },
      { "date": "12 / 2 / 2077", "acc": "89398478589", "biller": "james", "amount": 75000, "categorey": "active", "status": "yes" },
      { "date": "12 / 2 / 2077", "acc": "89398478589", "biller": "james", "amount": 75000, "categorey": "active", "status": "yes" },
      { "date": "12 / 2 / 2077", "acc": "89398478589", "biller": "james", "amount": 75000, "categorey": "active", "status": "yes" }
    ]
  }


  public viewPayment = {
    "cat":"",
    "biller":"",
    "from":"",
    "to":""
  }

}
