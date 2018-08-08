import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  username: String;
  user: User;
  user$: Observable<User>;
  message: String;
  isVisible: boolean;
  auxMessage: String;

  constructor(private navCtrl: NavController, private navParams: NavParams, private userProvider: UserProvider) {
    this.username = this.navParams.get("username");
    this.message = "User not found";
    this.auxMessage = "Value was left empty"
  }

  ionViewWillLoad() {
    this.isVisible = false;
    this.userProvider.getUser(this.username)
      .subscribe(u => {
        this.isVisible = true;
        this.user = u;
      });
  }

}
