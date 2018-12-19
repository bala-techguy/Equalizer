import { Injectable } from '@angular/core';
import { SubscriptionType } from '../models/subscriptionType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {

  subscriptionType: Observable<SubscriptionType[]>;

  constructor() { }

  getSubscriptionType() {

    let data = [
      {
        "TypeId": 1,
        "Name": "Weekly",
        "Days": 7
      },
      {
        "TypeId": 2,
        "Name": "Monthly",
        "Days": 30
      },
      {
        "TypeId": 3,
        "Name": "Yearly",
        "Days": 365
      }
    ];

    return data.map(res => {
      const data = res as SubscriptionType;
      return data;
    });

  }

}
