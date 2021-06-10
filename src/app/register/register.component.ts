import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public account = ["23748236482", "37653459349"];

  public check = false;

  public clicked() {
    this.check = true;
  }

  public sub = false;

  public submit() {
    this.sub = true;
  }


  public acc = {
    "account1": "",
    "account2": "",
    "check": ""
  }



}
