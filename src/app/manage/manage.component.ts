import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { AbcbankService } from './../abcbank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private customerObj3: AbcbankService, private router: Router, private auth:AuthService) { }

  public customer_id: any;
  public biller: any = [];

  ngOnInit(): void {
    this.checkValidSession();
    this.fetchAllBillersByCustomerId();
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



  public fetchAllBillersByCustomerId() {
    this.customer_id = localStorage.getItem("local_id");
    console.log("id 1 = " + this.customer_id);
    this.customerObj3.getAllBillersByCustId(this.customer_id).subscribe(result => this.biller = result);
    console.log(this.biller);
  }

  public isselected = false;

  public selected(id: any) {
    this.isselected = true;
    console.log(id);
  }

  public billerManage = {
    "billerId": "",
    "billerName": "",
    "billerAddress": "",
    "billerCategorey": "",
    "status": ""
  }

  public onModify(id: number) {
    console.log("biller id:"+id);
    localStorage.removeItem("local_bid");
    localStorage.setItem("local_bid", id.toString());
    this.router.navigate(['modify']);
  }

}
