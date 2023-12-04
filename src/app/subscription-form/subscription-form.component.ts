import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Sub} from "../models/sub";
import {SubscribersService} from "../services/subscribers.service";

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  isEmailInUse: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subService: SubscribersService) {
  }

  onSubmit(subForm: NgForm) {
    const subData: Sub = {
      name: subForm.value.name,
      email: subForm.value.email
    }
    this.subService.checkSubs(subData.email).subscribe(val => {
      if (val.empty) {
        this.subService.addSubs(subData);
        this.isSubscribed = true;
      } else
        this.isEmailInUse = true;
    })
  }
}


