import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getBiller();
  }

  public biller:any;

  public getBiller() {
    this.biller = [
      {"id":1, "name":"saravana", "address":"7th thavenue", "categorey":"Electricity", "status":"Active"},
      {"id":2, "name":"Venkat", "address":"56th Avenue", "categorey":"Milk", "status":"InActive"},
      {"id":3, "name":"Srijith", "address":"20th Avenue", "categorey":"Water", "status":"Active"},
      {"id":4, "name":"Sebin", "address":"Red Hills	", "categorey":"Electricity", "status":"InActive"},
      {"id":5, "name":"Shyam", "address":"Avadi", "categorey":"School Fees", "status":"Active"},
    ]
  }

  public isselected = false;

  public selected(id:any) {
    this.isselected = true;
    console.log(id);
  }

  public billerManage = {
    "id":"",
    "name":"",
    "address":"",
    "categorey":"",
    "status":""
  }

}
