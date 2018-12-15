import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Observable<User[]>;

  constructor() { }

  subscribersForm = new FormGroup({
    InternalId: new FormControl(null),
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    RoleId: new FormControl('', Validators.required),
    IsEnabled: new FormControl(''),
    CreatedDate: new FormControl(''),
    ModifiedDate: new FormControl('')

  })

  getUsers() {

    let data = [
      {
        "InternalId": "5c1524e1969743c2b71d1c6e",
        "UserName": "Dionne",
        "Password": "9610A",
        "RoleId": "SuperUser",
        "IsEnabled": false,
        "CreatedDate": "2018-05-23",
        "ModifiedDate": "2015-09-26"
      },
      {
        "InternalId": "5c1524e192b15d44219d2eb4",
        "UserName": "Berry",
        "Password": "7398A",
        "RoleId": "Admin",
        "IsEnabled": false,
        "CreatedDate": "2017-12-01",
        "ModifiedDate": "2017-02-06"
      },
      {
        "InternalId": "5c1524e16958613fc6c2e057",
        "UserName": "Valerie",
        "Password": "4872A",
        "RoleId": "Admin",
        "IsEnabled": true,
        "CreatedDate": "2014-01-29",
        "ModifiedDate": "2015-05-26"
      },
      {
        "InternalId": "5c1524e196b38c3fef0345eb",
        "UserName": "Elise",
        "Password": "8644A",
        "RoleId": "Admin",
        "IsEnabled": false,
        "CreatedDate": "2015-08-10",
        "ModifiedDate": "2014-11-19"
      },
      {
        "InternalId": "5c1524e1127fa3f431bba17d",
        "UserName": "Miller",
        "Password": "551A",
        "RoleId": "SuperUser",
        "IsEnabled": false,
        "CreatedDate": "2014-06-09",
        "ModifiedDate": "2018-09-01"
      },
      {
        "InternalId": "5c1524e1816abb0fc3e57992",
        "UserName": "Contreras",
        "Password": "1637A",
        "RoleId": "SuperUser",
        "IsEnabled": true,
        "CreatedDate": "2018-02-24",
        "ModifiedDate": "2015-10-01"
      },
      {
        "InternalId": "5c1524e1c1f91fbe1e0a93a1",
        "UserName": "Lana",
        "Password": "1020A",
        "RoleId": "User",
        "IsEnabled": true,
        "CreatedDate": "2015-10-02",
        "ModifiedDate": "2017-06-21"
      },
      {
        "InternalId": "5c1524e1495d4775f434a13d",
        "UserName": "Lancaster",
        "Password": "5812A",
        "RoleId": "Admin",
        "IsEnabled": false,
        "CreatedDate": "2016-02-18",
        "ModifiedDate": "2016-09-18"
      },
      {
        "InternalId": "5c1524e110bf0f0bca6abf97",
        "UserName": "Fields",
        "Password": "420A",
        "RoleId": "User",
        "IsEnabled": false,
        "CreatedDate": "2017-05-07",
        "ModifiedDate": "2018-03-13"
      },
      {
        "InternalId": "5c1524e1f1666dfb0bc47e41",
        "UserName": "Mariana",
        "Password": "1275A",
        "RoleId": "SuperUser",
        "IsEnabled": false,
        "CreatedDate": "2016-10-27",
        "ModifiedDate": "2014-08-01"
      },
      {
        "InternalId": "5c1524e1eb26b8874e908c3f",
        "UserName": "Edwina",
        "Password": "6111A",
        "RoleId": "Admin",
        "IsEnabled": false,
        "CreatedDate": "2014-07-21",
        "ModifiedDate": "2014-06-05"
      },
      {
        "InternalId": "5c1524e138a56ca3530de294",
        "UserName": "Lauren",
        "Password": "449A",
        "RoleId": "User",
        "IsEnabled": false,
        "CreatedDate": "2014-10-03",
        "ModifiedDate": "2015-08-08"
      },
      {
        "InternalId": "5c1524e11e222d3227dc0297",
        "UserName": "Michael",
        "Password": "6071A",
        "RoleId": "User",
        "IsEnabled": true,
        "CreatedDate": "2018-11-11",
        "ModifiedDate": "2014-08-20"
      },
      {
        "InternalId": "5c1524e19e64fb7d530e0d99",
        "UserName": "Dianna",
        "Password": "170A",
        "RoleId": "User",
        "IsEnabled": false,
        "CreatedDate": "2015-01-18",
        "ModifiedDate": "2016-01-28"
      },
      {
        "InternalId": "5c1524e1eff9dd27532f26da",
        "UserName": "Nielsen",
        "Password": "9713A",
        "RoleId": "SuperUser",
        "IsEnabled": false,
        "CreatedDate": "2014-01-06",
        "ModifiedDate": "2016-02-13"
      },
      {
        "InternalId": "5c1524e1ceb58ec93f9b8261",
        "UserName": "Alana",
        "Password": "9623A",
        "RoleId": "SuperUser",
        "IsEnabled": false,
        "CreatedDate": "2018-01-02",
        "ModifiedDate": "2014-08-28"
      },
      {
        "InternalId": "5c1524e107904331e90678f1",
        "UserName": "Rose",
        "Password": "2882A",
        "RoleId": "User",
        "IsEnabled": true,
        "CreatedDate": "2014-11-26",
        "ModifiedDate": "2016-07-12"
      },
      {
        "InternalId": "5c1524e19550e61c82677ab7",
        "UserName": "Mccarthy",
        "Password": "758A",
        "RoleId": "Admin",
        "IsEnabled": false,
        "CreatedDate": "2017-06-29",
        "ModifiedDate": "2018-07-20"
      },
      {
        "InternalId": "5c1524e190507b6bb338eaea",
        "UserName": "Caitlin",
        "Password": "5068A",
        "RoleId": "User",
        "IsEnabled": false,
        "CreatedDate": "2018-05-28",
        "ModifiedDate": "2015-12-05"
      },
      {
        "InternalId": "5c1524e183049f2f73fbb350",
        "UserName": "Gabriela",
        "Password": "1597A",
        "RoleId": "Admin",
        "IsEnabled": true,
        "CreatedDate": "2015-12-25",
        "ModifiedDate": "2015-12-03"
      },
      {
        "InternalId": "5c1524e124984c5ac97bb739",
        "UserName": "Avis",
        "Password": "1251A",
        "RoleId": "User",
        "IsEnabled": true,
        "CreatedDate": "2018-06-20",
        "ModifiedDate": "2015-10-04"
      },
      {
        "InternalId": "5c1524e1046bf13c879da4f2",
        "UserName": "Ayala",
        "Password": "5910A",
        "RoleId": "User",
        "IsEnabled": false,
        "CreatedDate": "2017-01-06",
        "ModifiedDate": "2016-09-23"
      },
      {
        "InternalId": "5c1524e19a04b0cff7ec14bd",
        "UserName": "Tara",
        "Password": "8898A",
        "RoleId": "SuperUser",
        "IsEnabled": false,
        "CreatedDate": "2017-09-20",
        "ModifiedDate": "2017-05-12"
      }
    ];
  
    return data.map(res => {
      const data = res as User;
      return data;
    });
  }
}

