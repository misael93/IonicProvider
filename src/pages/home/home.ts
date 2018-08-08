import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: String;

  constructor(private navCtrl: NavController) {

  }

  sendValue(user) {
    this.message = "";
    if (user) {
      this.navCtrl.push("UserPage", { username: user});
    } else {
      this.message = "Username field cannot be empty"
    }
  }

}
