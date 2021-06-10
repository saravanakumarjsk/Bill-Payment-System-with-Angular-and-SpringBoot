import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-biller',
  templateUrl: './add-biller.component.html',
  styleUrls: ['./add-biller.component.css']
})
export class AddBillerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public categorey: any = ["Insurence", "Food", "Water", "Electricity"];

  public addBiller = {
    "name": "",
    "address": "",
    "city": "",
    "pin": "",
    "cat": ""
  }

}
