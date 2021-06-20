import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.checkValidSession();
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

}
