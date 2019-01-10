import { Injectable } from '@angular/core';
import { SubscriptionType } from '../models/subscriptionType';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {

  constructor() { }

  subscriptionTypeForm = new FormGroup({

    InternalId: new FormControl(null),
    TypeId: new FormControl('',Validators.required),
    Name : new FormControl('',Validators.required),
    Days: new FormControl('',Validators.required),
    LoyaltyPoints: new FormControl('',Validators.required)

  })

  insertSubscriptionType(model) {

    console.log(model);
    // After writing the values into database
    this.subscriptionTypeForm.reset();
  }

  editSubscriptionType(model) {

    console.log(model);
    // After writing the values into database
    this.subscriptionTypeForm.reset();
  }

  deleteSubscriptionType(model) {
    console.log(model);
    this.subscriptionTypeForm.reset();
  }

  loadForm(data) {
    console.log(data);
    this.subscriptionTypeForm.setValue(data);
  }

  getSubscriptionType() {

    let data = [
      {
        "InternalId": "5c2c92d7f7ec7b19d205180",
        "TypeId": 1,
        "Name": "Weekly",
        "Days": 7,
        "LoyaltyPoints": 120
      },
      {
        "InternalId": "5c2c92d756f1aba6db2dd5e",
        "TypeId": 2,
        "Name": "Monthly",
        "Days": 30,
        "LoyaltyPoints": 500
      },
      {
        "InternalId": "5c2c92d7b05d3f78866528b",
        "TypeId": 3,
        "Name": "Yearly",
        "Days": 365,
        "LoyaltyPoints": 350
      }
    ];

    return data.map(res => {
      const data = res as SubscriptionType;
      return data;
    });

  }

}
