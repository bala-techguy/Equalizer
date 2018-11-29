import { Injectable } from '@angular/core';
import { Subscriber } from '../models/subscriber';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  subscribers: Observable<Subscriber[]>;

  constructor() { }

  getSubscribers() {

    let data = [
      {
        "SubscriptionNo": "860",
        "CustomerName": "Superman",
        "Mobile": "45987432"
      },
      {
        "SubscriptionNo": "870",
        "CustomerName": "Foo",
        "Mobile": "75456842"
      },
      {
        "SubscriptionNo": "590",
        "CustomerName": "Toto",
        "Mobile": "35487523"
      },
      {
        "SubscriptionNo": "550",
        "CustomerName": "Frodo",
        "Mobile": "45786984"
      }
    ];

    return data.map(res => {
      const data = res as Subscriber;
      return data;
    });

    //return this.clientsCollection.snapshotChanges();
  }



}
