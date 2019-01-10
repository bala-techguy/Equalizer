import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDashboardTiles() {

    let data = [
      {
        "SubscribersDue": "15",
        "OutstandingCoomplaints": "11",
        "LoyaltyUsers": "13",
        "TotalSubscribers": "123"
      }
    ];

    return data;

  }

}
