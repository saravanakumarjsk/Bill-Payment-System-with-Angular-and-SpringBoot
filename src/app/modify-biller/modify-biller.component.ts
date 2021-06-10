import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-biller',
  templateUrl: './modify-biller.component.html',
  styleUrls: ['./modify-biller.component.css']
})
export class ModifyBillerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public categorey: any = ["Insurence", "Food", "Water", "Electricity"];

  public updateBiller = {
    "name": "",
    "address": "",
    "city": "",
    "pin": "",
    "cat": "",
    "status":""
  }

}
