import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public auth: boolean = false;

  public setter(auth: boolean) {
    this.auth = auth;
  }

  public getter() {
    return this.auth;
  }

}
