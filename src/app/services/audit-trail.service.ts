import { Injectable } from '@angular/core';
import { AuditTrail } from '../models/auditTrail';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class AuditTrailService {

  constructor() { }

  auditTrailForm = new FormGroup({

    InternalId: new FormControl(''),
    UserNameWhoUpdated: new FormControl(''),
    SubscriptionNo: new FormControl(''),
    Description: new FormControl(''),
    Date: new FormControl(''),
  })

  getAuditTrail() {

    let data = [
      {
        "InternalId": "5c1524e19a04b0cff7ec14bd",
        "UserNameWhoUpdated": [
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
        "SubscriptionNo": "8898A",
        "Description": "Proident sint ad minim reprehenderit officia. Fugiat ad tempor ipsum ad excepteur elit. Enim pariatur tempor dolor veniam aute enim amet consequat elit cillum officia sunt qui qui.\r\n",
        "Date": "2017-09-20"
      }
    ];

    return data.map(res => {
      const data = res as AuditTrail;
      return data;
    });

  }

}
