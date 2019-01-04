import { Injectable } from '@angular/core';
import { LoyaltyUser } from '../models/loyaltyUser';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class LoyaltyUserService {

  complaints: Observable<LoyaltyUser[]>;

  constructor() { }

  loyaltyUsersForm = new FormGroup({

    InternalId: new FormControl(null),
    LoyaltyUserId: new FormControl('',Validators.required),
    Name : new FormControl('',Validators.required),
    CreatedDate: new FormControl(''),
    ModifiedDate: new FormControl(''),

  })

  insertLoyaltyUsers(model) {

    console.log(model);
    // After writing the values into database
    this.loyaltyUsersForm.reset();
  }

  editLoyaltyUsers(model) {

    console.log(model);
    // After writing the values into database
    this.loyaltyUsersForm.reset();
  }

  deleteLoyaltyUsers(model) {
    console.log(model);
    this.loyaltyUsersForm.reset();
  }

  loadForm(data) {
    console.log(data);
    this.loyaltyUsersForm.setValue(data);
  }

  getLoyaltyUsers() {

    let data = [
      {
        "InternalId": "5c2c92d7f7e8c7b19d205180",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7c09171854bd6a951",
            "UserName": "Becky",
            "Password": "153A",
            "RoleId": "User",
            "IsEnabled": true,
            "CreatedDate": "2016-04-10",
            "ModifiedDate": "2016-08-28"
          }
        ],
        "Name": "Allison Parrish",
        "CreatedDate": "2018-01-25",
        "ModifiedDate": "2018-05-28"
      },
      {
        "InternalId": "5c2c92d756f1abaa6db2dd5e",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d724d5a253b5d10437",
            "UserName": "Marks",
            "Password": "9122A",
            "RoleId": "Admin",
            "IsEnabled": true,
            "CreatedDate": "2016-03-02",
            "ModifiedDate": "2018-03-23"
          }
        ],
        "Name": "Maritza Castaneda",
        "CreatedDate": "2015-03-06",
        "ModifiedDate": "2018-03-11"
      },
      {
        "InternalId": "5c2c92d7b05d3f7a8866528b",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7eacf9523ab7ab552",
            "UserName": "Karin",
            "Password": "3531A",
            "RoleId": "User",
            "IsEnabled": true,
            "CreatedDate": "2018-01-11",
            "ModifiedDate": "2018-11-14"
          }
        ],
        "Name": "Katie Beck",
        "CreatedDate": "2018-04-12",
        "ModifiedDate": "2015-08-05"
      },
      {
        "InternalId": "5c2c92d7acfc519b9faf9c77",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7fb3f55d941ec9a5e",
            "UserName": "Molly",
            "Password": "1184A",
            "RoleId": "Admin",
            "IsEnabled": false,
            "CreatedDate": "2014-09-30",
            "ModifiedDate": "2016-08-02"
          }
        ],
        "Name": "Calhoun Hampton",
        "CreatedDate": "2018-07-14",
        "ModifiedDate": "2015-03-13"
      },
      {
        "InternalId": "5c2c92d73f398278aa081347",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7a9bee7e96ae9949d",
            "UserName": "Norman",
            "Password": "7071A",
            "RoleId": "User",
            "IsEnabled": false,
            "CreatedDate": "2017-04-14",
            "ModifiedDate": "2015-03-15"
          }
        ],
        "Name": "Ashlee Santos",
        "CreatedDate": "2018-01-21",
        "ModifiedDate": "2017-09-01"
      },
      {
        "InternalId": "5c2c92d7db900afd92dbf3bb",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7e69a5c931001a3e0",
            "UserName": "Gates",
            "Password": "6102A",
            "RoleId": "SuperUser",
            "IsEnabled": true,
            "CreatedDate": "2018-11-19",
            "ModifiedDate": "2016-03-04"
          }
        ],
        "Name": "Adkins Fry",
        "CreatedDate": "2017-05-17",
        "ModifiedDate": "2018-03-17"
      },
      {
        "InternalId": "5c2c92d787e45a1477903d7f",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7faeb794617bfc472",
            "UserName": "Levine",
            "Password": "309A",
            "RoleId": "Admin",
            "IsEnabled": true,
            "CreatedDate": "2017-01-08",
            "ModifiedDate": "2015-09-27"
          }
        ],
        "Name": "Neal Ewing",
        "CreatedDate": "2014-05-26",
        "ModifiedDate": "2016-08-30"
      },
      {
        "InternalId": "5c2c92d76c1467ffc288a252",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7e477e2b88e57d081",
            "UserName": "Freeman",
            "Password": "4433A",
            "RoleId": "SuperUser",
            "IsEnabled": false,
            "CreatedDate": "2017-09-20",
            "ModifiedDate": "2017-07-14"
          }
        ],
        "Name": "Aguilar Nunez",
        "CreatedDate": "2017-08-24",
        "ModifiedDate": "2018-07-23"
      },
      {
        "InternalId": "5c2c92d7ae17f3923591f609",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7b8e7fe8cb8eb94ba",
            "UserName": "Silva",
            "Password": "1467A",
            "RoleId": "User",
            "IsEnabled": false,
            "CreatedDate": "2014-08-09",
            "ModifiedDate": "2016-01-09"
          }
        ],
        "Name": "Zamora Edwards",
        "CreatedDate": "2015-09-25",
        "ModifiedDate": "2014-03-09"
      },
      {
        "InternalId": "5c2c92d77d401ca28aefaaf3",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d771bcff038bc16e74",
            "UserName": "Lee",
            "Password": "7379A",
            "RoleId": "User",
            "IsEnabled": false,
            "CreatedDate": "2015-07-16",
            "ModifiedDate": "2018-01-22"
          }
        ],
        "Name": "Forbes Love",
        "CreatedDate": "2015-04-15",
        "ModifiedDate": "2015-01-07"
      },
      {
        "InternalId": "5c2c92d7dc482e4bbfa9ae3a",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d70cafea0aefa9f154",
            "UserName": "Phillips",
            "Password": "2565A",
            "RoleId": "Admin",
            "IsEnabled": true,
            "CreatedDate": "2016-02-06",
            "ModifiedDate": "2016-07-10"
          }
        ],
        "Name": "Jerry Lara",
        "CreatedDate": "2015-04-05",
        "ModifiedDate": "2016-10-29"
      },
      {
        "InternalId": "5c2c92d7bbec6034990f45b7",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d78fc50555eebe5ae2",
            "UserName": "Rosario",
            "Password": "526A",
            "RoleId": "Admin",
            "IsEnabled": false,
            "CreatedDate": "2017-03-12",
            "ModifiedDate": "2016-02-25"
          }
        ],
        "Name": "Nell Giles",
        "CreatedDate": "2016-06-23",
        "ModifiedDate": "2016-02-01"
      },
      {
        "InternalId": "5c2c92d7d78e6c8d7b810689",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7ded4cd8f12df34db",
            "UserName": "Mckee",
            "Password": "3198A",
            "RoleId": "User",
            "IsEnabled": true,
            "CreatedDate": "2016-01-17",
            "ModifiedDate": "2014-03-22"
          }
        ],
        "Name": "Hartman Armstrong",
        "CreatedDate": "2017-01-22",
        "ModifiedDate": "2015-12-31"
      },
      {
        "InternalId": "5c2c92d79e19b31672cf7441",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d70f141e1387f0f123",
            "UserName": "Terra",
            "Password": "976A",
            "RoleId": "SuperUser",
            "IsEnabled": false,
            "CreatedDate": "2016-08-30",
            "ModifiedDate": "2018-03-03"
          }
        ],
        "Name": "Debbie Ramirez",
        "CreatedDate": "2016-12-30",
        "ModifiedDate": "2015-01-29"
      },
      {
        "InternalId": "5c2c92d750eb8c4f07b534bf",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7a0b7bfddfbcb07ce",
            "UserName": "Sally",
            "Password": "5951A",
            "RoleId": "SuperUser",
            "IsEnabled": false,
            "CreatedDate": "2016-07-22",
            "ModifiedDate": "2015-11-01"
          }
        ],
        "Name": "Valarie Mann",
        "CreatedDate": "2018-05-07",
        "ModifiedDate": "2014-02-28"
      },
      {
        "InternalId": "5c2c92d7aa93117b79aaa344",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7a5822d7206484a7a",
            "UserName": "Chambers",
            "Password": "5436A",
            "RoleId": "User",
            "IsEnabled": false,
            "CreatedDate": "2015-05-07",
            "ModifiedDate": "2017-02-03"
          }
        ],
        "Name": "Rowena Leach",
        "CreatedDate": "2018-05-26",
        "ModifiedDate": "2018-09-13"
      },
      {
        "InternalId": "5c2c92d7de886b7df5ad9742",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7da69aefd888a4c42",
            "UserName": "Lindsey",
            "Password": "2968A",
            "RoleId": "User",
            "IsEnabled": true,
            "CreatedDate": "2018-11-18",
            "ModifiedDate": "2014-11-28"
          }
        ],
        "Name": "Aileen Martin",
        "CreatedDate": "2016-05-24",
        "ModifiedDate": "2018-08-18"
      },
      {
        "InternalId": "5c2c92d7ed57bec171b75ebf",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7cd7f8836e8f9f454",
            "UserName": "Lavonne",
            "Password": "1532A",
            "RoleId": "Admin",
            "IsEnabled": true,
            "CreatedDate": "2017-02-08",
            "ModifiedDate": "2018-07-22"
          }
        ],
        "Name": "Lawrence Fuentes",
        "CreatedDate": "2015-04-27",
        "ModifiedDate": "2015-06-09"
      },
      {
        "InternalId": "5c2c92d710fe048050464912",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d75deeca2c342f20d9",
            "UserName": "Holt",
            "Password": "5696A",
            "RoleId": "User",
            "IsEnabled": true,
            "CreatedDate": "2017-01-04",
            "ModifiedDate": "2017-06-06"
          }
        ],
        "Name": "Carol Finley",
        "CreatedDate": "2014-04-28",
        "ModifiedDate": "2018-01-21"
      },
      {
        "InternalId": "5c2c92d78c53e624fb5ac0ff",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d774868e3540fd6fd5",
            "UserName": "Roach",
            "Password": "5909A",
            "RoleId": "Admin",
            "IsEnabled": false,
            "CreatedDate": "2015-10-03",
            "ModifiedDate": "2017-04-14"
          }
        ],
        "Name": "Adams Rivas",
        "CreatedDate": "2016-01-03",
        "ModifiedDate": "2018-07-30"
      },
      {
        "InternalId": "5c2c92d701a7fab26210065b",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7e5592cc92a422029",
            "UserName": "Duke",
            "Password": "5067A",
            "RoleId": "User",
            "IsEnabled": true,
            "CreatedDate": "2016-06-16",
            "ModifiedDate": "2017-04-07"
          }
        ],
        "Name": "Julianne Lewis",
        "CreatedDate": "2017-12-11",
        "ModifiedDate": "2016-02-15"
      },
      {
        "InternalId": "5c2c92d7fee0b4b0e5403080",
        "LoyaltyUserId": [
          {
            "InternalId": "5c2c92d7ec20bd36bd9cef64",
            "UserName": "Long",
            "Password": "5446A",
            "RoleId": "SuperUser",
            "IsEnabled": true,
            "CreatedDate": "2016-04-25",
            "ModifiedDate": "2018-02-22"
          }
        ],
        "Name": "Jill Cantrell",
        "CreatedDate": "2016-11-24",
        "ModifiedDate": "2015-01-25"
      }
    ];

    return data.map(res => {
      const data = res as LoyaltyUser;
      return data;
    });

  }
}
