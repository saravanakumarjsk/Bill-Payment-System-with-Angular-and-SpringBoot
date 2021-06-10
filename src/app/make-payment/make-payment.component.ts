import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public account:any = [87346823409, 2349283423];
  public biller:any = ["Saravana", "Sarath", "William", "Sathish"]
  
  public makePayment = {
    "acc":"",
    "biller":"",
    "bill":"",
    "pay":"",
    "date":""
  }

}
