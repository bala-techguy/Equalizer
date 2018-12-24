import { Injectable } from '@angular/core';
import { Loyalty } from '../models/loyalty';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {

  constructor() { }
  
  loyaltyForm = new FormGroup({

    LoyaltyUser: new FormControl(''),
    LoyaltyPoints: new FormControl(''),

  })

  getLoyalty() {

    let data = [
      {
        "LoyaltyUser": [
          {
            "InternalId": "5c1524e19a04b0cff7ec14bd",
            "UserName": "Tara",
            "Password": "8898A",
            "RoleId": "SuperUser",
            "IsEnabled": false,
            "CreatedDate": "2017-09-20",
            "ModifiedDate": "2017-05-12"
          }
        ],
        "LoyaltyPoints": "2369A",
      }
    ];

    return data.map(res => {
      const data = res as Loyalty;
      return data;
    });

  }

}
