import { Injectable } from '@angular/core';
import { Subscriber } from '../models/subscriber';
import { Observable } from 'rxjs';
import {FormControl, FormGroup, Validators} from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  subscribers: Observable<Subscriber[]>;

  constructor() { }

  subscribersForm = new FormGroup({
    InternalId: new FormControl(null),
    SNo: new FormControl(''),
    CreatedDate: new FormControl(''),
    SubscriptionNo: new FormControl('', Validators.required),
    CustomerName: new FormControl('',[Validators.required,Validators.maxLength(40)]),
    TypeId: new FormControl('', Validators.required),
    Address1: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    Address2: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    Address3: new FormControl(''),
    City: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    Pin: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required,Validators.email]),
    Mobile: new FormControl('', [Validators.required,Validators.minLength(8)]),
    Phone: new FormControl(''),
    ModifiedDate: new FormControl(''),
    Comments: new FormControl(''),
    DueDate: new FormControl(''),
    IsInvalid: new FormControl(''),
    CreatedByUserName: new FormControl(''),
    LoyaltyUserId: new FormControl('', Validators.required),
    RenewedDate: new FormControl('')
  })



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
      },
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
      }
    ];

    return data.map(res => {
      const data = res as Subscriber;
      return data;
    });

    //return this.clientsCollection.snapshotChanges();
  }



}
