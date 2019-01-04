import { Injectable } from '@angular/core';
import { Subscriber } from '../models/subscriber';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

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
    CustomerName: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    TypeId: new FormControl('', Validators.required),
    NewTypeId: new FormControl('', Validators.required),
    Address1: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    Address2: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    Address3: new FormControl(''),
    City: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    Pin: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Phone: new FormControl(''),
    ModifiedDate: new FormControl(''),
    Comments: new FormControl(''),
    DueDate: new FormControl(''),
    NewDueDate: new FormControl(''),
    IsInvalid: new FormControl(''),
    CreatedByUserName: new FormControl(''),
    LoyaltyUserId: new FormControl('', Validators.required),
    NewLoyaltyUserId: new FormControl('', Validators.required),
    RenewedDate: new FormControl(''),
    NewRenewedDate: new FormControl('')
  })

  insertSubscriber(model) {

    console.log(model);
    // After writing the values into database
    this.subscribersForm.reset();
  }

  editSubscriber(model) {

    //console.log(model);
    // After writing the values into database
    this.subscribersForm.reset();
  }

  deleteSubscriber(model) {
    console.log(model);
    this.subscribersForm.reset();
  }

  loadForm(data) {
    //console.log(sub);
    this.subscribersForm.setValue(data);
  }

  getSubscribers() {

    let data = [
      {
        "InternalId": "5c1b758ea1867af8504abacd",
        "SNo": 0,
        "CreatedDate": "2017-08-06",
        "SubscriptionNo": "5c1b758ec4afc114aa284d5c",
        "CustomerName": "Annette Gilliam",
        "TypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "Address1": "120 Tech Place",
        "Address2": "Sena",
        "Address3": "New Mexico, 4742",
        "City": "Elizaville",
        "State": "Missouri",
        "Country": "Iowa",
        "Pin": "3410A",
        "Email": "annettegilliam@duflex.com",
        "Mobile": "+1 (959) 542-2134",
        "Phone": "+1 (912) 583-3036",
        "ModifiedDate": "2017-11-17",
        "Comments": "Laboris occaecat dolore quis irure. Cillum cillum officia et adipisicing culpa dolore. Adipisicing ipsum ad id deserunt officia aliquip do elit in ullamco ut nostrud. Adipisicing aute velit labore Lorem in id mollit anim do. Quis commodo aliqua enim enim quis commodo. Exercitation cupidatat cupidatat consequat fugiat magna adipisicing aliquip est sit minim ipsum dolore. Consectetur mollit cupidatat et eu cupidatat aliqua cupidatat nostrud tempor mollit dolor ullamco.\r\n",
        "DueDate": "2014-01-19",
        "IsInvalid": true,
        "CreatedByUserName": "Cardenas",
        "LoyaltyUserId": 1716,
        "RenewedDate": "2017-05-20",
        "NewTypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "NewLoyaltyUserId": 1716,
        "NewRenewedDate": "2017-05-20",
        "NewDueDate": "2014-01-19"
      },
      {
        "InternalId": "5c1b758e78cfab14c75b53b0",
        "SNo": 1,
        "CreatedDate": "2014-07-24",
        "SubscriptionNo": "5c1b758e3d5f3a60c20a3f66",
        "CustomerName": "Gonzales Mendoza",
        "TypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "Address1": "277 Lawton Street",
        "Address2": "Reno",
        "Address3": "Montana, 3430",
        "City": "Swartzville",
        "State": "Maine",
        "Country": "Vermont",
        "Pin": "6299A",
        "Email": "gonzalesmendoza@duflex.com",
        "Mobile": "+1 (989) 572-3627",
        "Phone": "+1 (824) 436-3087",
        "ModifiedDate": "2014-04-09",
        "Comments": "Magna cillum do deserunt Lorem deserunt do nisi. Consectetur pariatur elit non est nulla laborum amet aliqua consequat. Occaecat mollit Lorem sit est occaecat nostrud sunt aliquip. Aliqua commodo laborum reprehenderit cupidatat irure dolor pariatur ipsum culpa ea adipisicing consequat laborum. Ipsum exercitation nulla reprehenderit elit et duis esse veniam dolore labore eiusmod nostrud. In officia veniam id ullamco elit aute et ea minim minim sunt minim amet. Laborum duis excepteur et ullamco nulla irure proident nostrud non labore nisi.\r\n",
        "DueDate": "2016-12-06",
        "IsInvalid": false,
        "CreatedByUserName": "Drake",
        "LoyaltyUserId": 5299,
        "RenewedDate": "2017-04-28",
        "NewTypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "NewLoyaltyUserId": 5299,
        "NewRenewedDate": "2017-04-28",
        "NewDueDate": "2016-12-06"
      },
      {
        "InternalId": "5c1b758e7d3901219b3c4dd1",
        "SNo": 2,
        "CreatedDate": "2014-03-24",
        "SubscriptionNo": "5c1b758e569eea533574d9ea",
        "CustomerName": "Keisha Cain",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "363 Miller Place",
        "Address2": "Yukon",
        "Address3": "Puerto Rico, 7347",
        "City": "Oberlin",
        "State": "Washington",
        "Country": "California",
        "Pin": "2478A",
        "Email": "keishacain@duflex.com",
        "Mobile": "+1 (806) 512-2015",
        "Phone": "+1 (986) 566-3120",
        "ModifiedDate": "2018-11-17",
        "Comments": "Et dolor est sit in consequat. Voluptate Lorem id voluptate commodo aute in mollit veniam. Aliquip aliqua excepteur in et dolor et. Ex adipisicing sint amet pariatur pariatur pariatur reprehenderit anim exercitation occaecat labore ut enim. Pariatur nostrud est deserunt proident consectetur culpa sunt proident cillum sint veniam cupidatat deserunt et. Exercitation nisi et eu incididunt veniam ut ea culpa duis. Nulla et est non sunt adipisicing cupidatat pariatur fugiat minim exercitation mollit qui tempor.\r\n",
        "DueDate": "2015-12-25",
        "IsInvalid": false,
        "CreatedByUserName": "Clemons",
        "LoyaltyUserId": 2083,
        "RenewedDate": "2015-02-12",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 2083,
        "NewRenewedDate": "2015-02-12",
        "NewDueDate": "2015-12-25"
      },
      {
        "InternalId": "5c1b758ef2fe2924c3989be9",
        "SNo": 3,
        "CreatedDate": "2016-11-06",
        "SubscriptionNo": "5c1b758ec640332e1acd53d6",
        "CustomerName": "Briggs Davis",
        "TypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "Address1": "558 Strickland Avenue",
        "Address2": "Gloucester",
        "Address3": "Rhode Island, 3660",
        "City": "Baker",
        "State": "Nebraska",
        "Country": "Ohio",
        "Pin": "3046A",
        "Email": "briggsdavis@duflex.com",
        "Mobile": "+1 (841) 448-3793",
        "Phone": "+1 (931) 446-3109",
        "ModifiedDate": "2015-06-01",
        "Comments": "Anim officia exercitation quis nostrud pariatur culpa nostrud ut cupidatat ea. Nostrud irure nulla eiusmod ullamco commodo sit labore ad laboris excepteur. Nostrud quis ut aliqua magna. Et sunt esse et do. Duis labore velit id veniam esse et sunt.\r\n",
        "DueDate": "2016-04-02",
        "IsInvalid": false,
        "CreatedByUserName": "Loraine",
        "LoyaltyUserId": 4545,
        "RenewedDate": "2017-05-02",
        "NewTypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "NewLoyaltyUserId": 4545,
        "NewRenewedDate": "2017-05-02",
        "NewDueDate": "2016-04-02"
      },
      {
        "InternalId": "5c1b758ecd877985a213b810",
        "SNo": 4,
        "CreatedDate": "2015-11-20",
        "SubscriptionNo": "5c1b758e983e34f9ed6a6592",
        "CustomerName": "Hines Jenkins",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "182 Highland Boulevard",
        "Address2": "Nicut",
        "Address3": "Indiana, 8680",
        "City": "Bend",
        "State": "Texas",
        "Country": "Marshall Islands",
        "Pin": "7236A",
        "Email": "hinesjenkins@duflex.com",
        "Mobile": "+1 (936) 580-3008",
        "Phone": "+1 (965) 460-3183",
        "ModifiedDate": "2015-07-17",
        "Comments": "Irure velit ex voluptate aliquip culpa sunt enim quis minim nulla quis. Dolor adipisicing aute ex nostrud. Excepteur excepteur deserunt cupidatat exercitation mollit non ipsum commodo exercitation fugiat. Dolore non mollit officia ex mollit ullamco reprehenderit eu nulla. Cillum id commodo est esse sit velit esse ex nulla ipsum velit. Est do nulla irure esse eiusmod aliquip veniam. Veniam ut nulla duis excepteur enim laborum aliqua minim esse amet id.\r\n",
        "DueDate": "2014-08-12",
        "IsInvalid": false,
        "CreatedByUserName": "Simmons",
        "LoyaltyUserId": 963,
        "RenewedDate": "2018-01-31",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 963,
        "NewRenewedDate": "2018-01-31",
        "NewDueDate": "2014-08-12"
      },
      {
        "InternalId": "5c1b758ead77fb3ee09237a0",
        "SNo": 5,
        "CreatedDate": "2017-11-01",
        "SubscriptionNo": "5c1b758e1f16b97ed39276cc",
        "CustomerName": "Barrett Zamora",
        "TypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "Address1": "152 Beadel Street",
        "Address2": "Gardners",
        "Address3": "Kansas, 7427",
        "City": "Morgandale",
        "State": "District Of Columbia",
        "Country": "American Samoa",
        "Pin": "3150A",
        "Email": "barrettzamora@duflex.com",
        "Mobile": "+1 (846) 478-2112",
        "Phone": "+1 (883) 468-2724",
        "ModifiedDate": "2015-07-13",
        "Comments": "Velit commodo veniam consequat in aliquip. Qui ipsum ipsum pariatur adipisicing eu consectetur id duis nisi ipsum esse non occaecat. Sint irure enim cillum commodo Lorem id voluptate. Ex Lorem veniam commodo cillum Lorem. Ex proident exercitation minim sit adipisicing et proident cillum elit aliquip amet velit sint et.\r\n",
        "DueDate": "2016-10-11",
        "IsInvalid": true,
        "CreatedByUserName": "Noelle",
        "LoyaltyUserId": 7394,
        "RenewedDate": "2018-09-29",
        "NewTypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "NewLoyaltyUserId": 7394,
        "NewRenewedDate": "2018-09-29",
        "NewDueDate": "2016-10-11"
      },
      {
        "InternalId": "5c1b758e52272defd4fbec2f",
        "SNo": 6,
        "CreatedDate": "2018-04-01",
        "SubscriptionNo": "5c1b758efb81fd8652bfd63e",
        "CustomerName": "Everett Tran",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "274 Hyman Court",
        "Address2": "Norfolk",
        "Address3": "New Hampshire, 3251",
        "City": "Tonopah",
        "State": "Hawaii",
        "Country": "Arkansas",
        "Pin": "7209A",
        "Email": "everetttran@duflex.com",
        "Mobile": "+1 (946) 555-2741",
        "Phone": "+1 (870) 452-3971",
        "ModifiedDate": "2016-03-06",
        "Comments": "Magna proident qui commodo reprehenderit officia dolore sunt incididunt ex. Sunt deserunt ex esse cupidatat culpa sint proident ad culpa ad esse ut incididunt. Ut mollit esse eu esse nulla consequat minim. Magna Lorem est ipsum reprehenderit. Ullamco dolor occaecat esse ex. Ipsum exercitation est qui laboris nulla aliquip dolore nulla tempor proident sunt cillum. Non cillum nisi do mollit Lorem eu aliqua cillum veniam pariatur et deserunt eiusmod.\r\n",
        "DueDate": "2017-09-11",
        "IsInvalid": true,
        "CreatedByUserName": "Blevins",
        "LoyaltyUserId": 3264,
        "RenewedDate": "2014-03-31",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 3264,
        "NewRenewedDate": "2014-03-31",
        "NewDueDate": "2017-09-11"
      },
      {
        "InternalId": "5c1b758e94f9bb12ec441046",
        "SNo": 7,
        "CreatedDate": "2018-11-28",
        "SubscriptionNo": "5c1b758e3f71a8f8d79226ed",
        "CustomerName": "Rae Richmond",
        "TypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "Address1": "202 Columbia Place",
        "Address2": "Staples",
        "Address3": "Tennessee, 2925",
        "City": "Cucumber",
        "State": "Delaware",
        "Country": "Palau",
        "Pin": "474A",
        "Email": "raerichmond@duflex.com",
        "Mobile": "+1 (824) 470-2376",
        "Phone": "+1 (902) 478-2838",
        "ModifiedDate": "2016-02-19",
        "Comments": "Magna sunt irure aliquip deserunt esse deserunt adipisicing velit anim id quis et. Eu commodo laboris est in aliquip. Sint in incididunt duis in excepteur. Laboris qui anim cupidatat ut incididunt. Nostrud qui ullamco irure tempor voluptate irure. Et adipisicing labore pariatur magna aute. Ea nostrud Lorem nostrud proident voluptate exercitation magna culpa excepteur.\r\n",
        "DueDate": "2017-04-09",
        "IsInvalid": true,
        "CreatedByUserName": "Candace",
        "LoyaltyUserId": 8525,
        "RenewedDate": "2014-06-05",
        "NewTypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "NewLoyaltyUserId": 8525,
        "NewRenewedDate": "2014-06-05",
        "NewDueDate": "2017-04-09"
      },
      {
        "InternalId": "5c1b758ea303000426308b7e",
        "SNo": 8,
        "CreatedDate": "2018-02-25",
        "SubscriptionNo": "5c1b758e3f5a95939f1d3048",
        "CustomerName": "Michael Dotson",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "673 Lorraine Street",
        "Address2": "Whitestone",
        "Address3": "Nevada, 3758",
        "City": "Strong",
        "State": "Louisiana",
        "Country": "New York",
        "Pin": "4208A",
        "Email": "michaeldotson@duflex.com",
        "Mobile": "+1 (810) 411-3134",
        "Phone": "+1 (986) 471-3446",
        "ModifiedDate": "2015-03-08",
        "Comments": "Incididunt dolor ad voluptate ipsum ex quis duis cillum amet eu laborum ullamco do laboris. Cupidatat tempor veniam magna exercitation elit excepteur ipsum Lorem. Proident exercitation do proident irure eiusmod. Lorem officia eu ea voluptate.\r\n",
        "DueDate": "2015-09-08",
        "IsInvalid": true,
        "CreatedByUserName": "Davenport",
        "LoyaltyUserId": 2908,
        "RenewedDate": "2015-08-28",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 2908,
        "NewRenewedDate": "2015-08-28",
        "NewDueDate": "2015-09-08"
      },
      {
        "InternalId": "5c1b758e66f7c8c215792732",
        "SNo": 9,
        "CreatedDate": "2018-08-09",
        "SubscriptionNo": "5c1b758e8878157737b0c639",
        "CustomerName": "Elsie Moreno",
        "TypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "Address1": "139 Dooley Street",
        "Address2": "Oley",
        "Address3": "Virgin Islands, 3555",
        "City": "Elwood",
        "State": "Mississippi",
        "Country": "Guam",
        "Pin": "875A",
        "Email": "elsiemoreno@duflex.com",
        "Mobile": "+1 (868) 444-3059",
        "Phone": "+1 (896) 466-3439",
        "ModifiedDate": "2017-09-24",
        "Comments": "Est sunt quis nulla id ad sint eiusmod incididunt incididunt aute culpa. Ea magna nostrud aute consectetur labore tempor velit proident. Eiusmod commodo proident nostrud et nostrud sit sit adipisicing mollit est et sunt id. Quis in dolore ullamco anim eiusmod exercitation ex officia elit enim occaecat. Enim veniam elit mollit aliquip dolor eu occaecat cillum id.\r\n",
        "DueDate": "2017-02-01",
        "IsInvalid": true,
        "CreatedByUserName": "Charlotte",
        "LoyaltyUserId": 6922,
        "RenewedDate": "2018-01-27",
        "NewTypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "NewLoyaltyUserId": 6922,
        "NewRenewedDate": "2018-01-27",
        "NewDueDate": "2017-02-01"
      },
      {
        "InternalId": "5c1b758ee4f2971a2868ac7f",
        "SNo": 10,
        "CreatedDate": "2015-10-23",
        "SubscriptionNo": "5c1b758e81d565a843f66b02",
        "CustomerName": "Lynne Mcconnell",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "793 Gaylord Drive",
        "Address2": "Vincent",
        "Address3": "West Virginia, 2278",
        "City": "Brethren",
        "State": "North Carolina",
        "Country": "Maryland",
        "Pin": "2000A",
        "Email": "lynnemcconnell@duflex.com",
        "Mobile": "+1 (900) 548-2358",
        "Phone": "+1 (972) 478-3552",
        "ModifiedDate": "2014-01-01",
        "Comments": "Occaecat ullamco ex culpa aute. Ad nisi nisi eiusmod sint. Eu ea commodo minim occaecat ex ullamco laboris. Irure officia est voluptate minim voluptate consequat voluptate do proident. Nulla non consectetur Lorem deserunt excepteur laborum do sint est Lorem non. Occaecat voluptate anim nostrud ipsum ut ex consequat duis occaecat sint. Ea culpa dolor duis id quis velit nostrud in.\r\n",
        "DueDate": "2018-10-25",
        "IsInvalid": false,
        "CreatedByUserName": "Lisa",
        "LoyaltyUserId": 7807,
        "RenewedDate": "2014-10-22",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 7807,
        "NewRenewedDate": "2014-10-22",
        "NewDueDate": "2018-10-25"
      },
      {
        "InternalId": "5c1b758ee64d45423a401186",
        "SNo": 11,
        "CreatedDate": "2017-04-22",
        "SubscriptionNo": "5c1b758ee132a332edcf01d1",
        "CustomerName": "Randall Burgess",
        "TypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "Address1": "691 Aberdeen Street",
        "Address2": "Wiscon",
        "Address3": "Massachusetts, 6423",
        "City": "Wollochet",
        "State": "Georgia",
        "Country": "Arizona",
        "Pin": "9959A",
        "Email": "randallburgess@duflex.com",
        "Mobile": "+1 (868) 507-2100",
        "Phone": "+1 (839) 488-3504",
        "ModifiedDate": "2015-07-05",
        "Comments": "Labore id sit incididunt enim incididunt pariatur culpa nostrud dolore. Et fugiat veniam esse officia ipsum ex exercitation voluptate nisi et eu. Occaecat ea minim deserunt officia.\r\n",
        "DueDate": "2016-08-01",
        "IsInvalid": true,
        "CreatedByUserName": "Lidia",
        "LoyaltyUserId": 3642,
        "RenewedDate": "2015-04-06",
        "NewTypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "NewLoyaltyUserId": 3642,
        "NewRenewedDate": "2015-04-06",
        "NewDueDate": "2016-08-01"
      },
      {
        "InternalId": "5c1b758e05f410c4bd035f0c",
        "SNo": 12,
        "CreatedDate": "2014-12-13",
        "SubscriptionNo": "5c1b758e64634b63001f78e9",
        "CustomerName": "Flossie Maddox",
        "TypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "Address1": "819 Robert Street",
        "Address2": "Trail",
        "Address3": "Colorado, 5714",
        "City": "Dana",
        "State": "Idaho",
        "Country": "Pennsylvania",
        "Pin": "1807A",
        "Email": "flossiemaddox@duflex.com",
        "Mobile": "+1 (880) 578-3707",
        "Phone": "+1 (874) 524-2384",
        "ModifiedDate": "2014-11-17",
        "Comments": "Aute adipisicing nostrud consectetur eiusmod pariatur irure anim non deserunt. Culpa labore elit quis ex tempor Lorem dolore aute exercitation velit excepteur anim dolore. Aute nostrud laborum fugiat non proident labore. Irure culpa proident cupidatat ipsum laboris ullamco consequat.\r\n",
        "DueDate": "2016-05-17",
        "IsInvalid": true,
        "CreatedByUserName": "Ferrell",
        "LoyaltyUserId": 6757,
        "RenewedDate": "2015-09-29",
        "NewTypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "NewLoyaltyUserId": 6757,
        "NewRenewedDate": "2015-09-29",
        "NewDueDate": "2016-05-17"
      },
      {
        "InternalId": "5c1b758ebc17f0926d1ee963",
        "SNo": 13,
        "CreatedDate": "2014-02-09",
        "SubscriptionNo": "5c1b758ed6a145be0bd99f44",
        "CustomerName": "Kaye Rios",
        "TypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "Address1": "829 Lincoln Avenue",
        "Address2": "Lund",
        "Address3": "Connecticut, 7547",
        "City": "Vandiver",
        "State": "New Jersey",
        "Country": "Wyoming",
        "Pin": "6945A",
        "Email": "kayerios@duflex.com",
        "Mobile": "+1 (885) 476-2749",
        "Phone": "+1 (809) 566-2561",
        "ModifiedDate": "2016-05-31",
        "Comments": "Pariatur nostrud ipsum mollit dolor ex ea cupidatat esse. Nostrud enim quis sint duis commodo eiusmod consequat amet velit proident. Velit sunt aliqua veniam ad sit voluptate consectetur officia. Nostrud in enim ipsum enim consectetur labore incididunt cillum ad officia in ipsum minim nostrud. Consectetur Lorem culpa officia deserunt commodo et duis officia. Est nostrud sunt fugiat esse nisi ex.\r\n",
        "DueDate": "2016-11-04",
        "IsInvalid": false,
        "CreatedByUserName": "Ayers",
        "LoyaltyUserId": 4747,
        "RenewedDate": "2018-05-18",
        "NewTypeId": [
          {
            "TypeId": 2,
            "Name": "Monthly",
            "Days": "30"
          }
        ],
        "NewLoyaltyUserId": 4747,
        "NewRenewedDate": "2018-05-18",
        "NewDueDate": "2016-11-04"
      },
      {
        "InternalId": "5c1b758ea57694b597eff98e",
        "SNo": 14,
        "CreatedDate": "2017-11-17",
        "SubscriptionNo": "5c1b758e4ef54354ffa86908",
        "CustomerName": "Desiree Rasmussen",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "564 Hopkins Street",
        "Address2": "Falmouth",
        "Address3": "North Dakota, 9383",
        "City": "Chumuckla",
        "State": "Kentucky",
        "Country": "Alaska",
        "Pin": "7837A",
        "Email": "desireerasmussen@duflex.com",
        "Mobile": "+1 (928) 497-2020",
        "Phone": "+1 (896) 582-2232",
        "ModifiedDate": "2017-12-19",
        "Comments": "Ullamco ullamco veniam enim cillum mollit sunt. Non est cillum Lorem deserunt velit eiusmod qui sunt. Amet tempor ut enim aliquip sint adipisicing sint sint ipsum culpa consequat anim esse ipsum. Sint minim ex aliqua aute consequat eiusmod ipsum sint. Velit proident quis ex officia eiusmod anim proident magna. Duis ad aliqua eiusmod incididunt sint mollit adipisicing. Nulla ad incididunt id id cillum irure et eu culpa sunt cillum quis anim.\r\n",
        "DueDate": "2018-01-21",
        "IsInvalid": true,
        "CreatedByUserName": "Tameka",
        "LoyaltyUserId": 7461,
        "RenewedDate": "2018-09-25",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 7461,
        "NewRenewedDate": "2018-09-25",
        "NewDueDate": "2018-01-21"
      },
      {
        "InternalId": "5c1b758e5187e8e5a718f086",
        "SNo": 15,
        "CreatedDate": "2014-06-02",
        "SubscriptionNo": "5c1b758e7b93597f019b4721",
        "CustomerName": "Haley Odom",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "174 Garland Court",
        "Address2": "Condon",
        "Address3": "Virginia, 108",
        "City": "Boling",
        "State": "Wisconsin",
        "Country": "Northern Mariana Islands",
        "Pin": "3109A",
        "Email": "haleyodom@duflex.com",
        "Mobile": "+1 (872) 413-2721",
        "Phone": "+1 (864) 434-3726",
        "ModifiedDate": "2016-12-21",
        "Comments": "Eiusmod voluptate officia esse adipisicing culpa. Dolore consectetur consectetur tempor dolore ullamco eiusmod aute Lorem magna aliqua adipisicing incididunt elit. Anim aute dolore in labore culpa. Anim quis amet excepteur deserunt nulla sunt magna nisi duis velit laborum officia.\r\n",
        "DueDate": "2018-02-24",
        "IsInvalid": true,
        "CreatedByUserName": "Adriana",
        "LoyaltyUserId": 1268,
        "RenewedDate": "2016-12-10",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 1268,
        "NewRenewedDate": "2016-12-10",
        "NewDueDate": "2018-02-24"
      },
      {
        "InternalId": "5c1b758eb1e5e9f4737b51a2",
        "SNo": 16,
        "CreatedDate": "2017-11-09",
        "SubscriptionNo": "5c1b758e9d5ee2bfac2a15cd",
        "CustomerName": "Blankenship Morrow",
        "TypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "Address1": "331 Milton Street",
        "Address2": "Blandburg",
        "Address3": "Alabama, 6739",
        "City": "Dunnavant",
        "State": "Utah",
        "Country": "South Dakota",
        "Pin": "8019A",
        "Email": "blankenshipmorrow@duflex.com",
        "Mobile": "+1 (919) 499-3597",
        "Phone": "+1 (833) 435-3077",
        "ModifiedDate": "2018-01-29",
        "Comments": "Exercitation voluptate duis dolor adipisicing nostrud magna eu eu. Deserunt proident reprehenderit sint reprehenderit irure ad. Est velit magna ad mollit ullamco adipisicing elit. Excepteur mollit minim incididunt in.\r\n",
        "DueDate": "2018-08-05",
        "IsInvalid": true,
        "CreatedByUserName": "Tia",
        "LoyaltyUserId": 6488,
        "RenewedDate": "2016-09-28",
        "NewTypeId": [
          {
            "TypeId": 1,
            "Name": "Weekly",
            "Days": "7"
          }
        ],
        "NewLoyaltyUserId": 6488,
        "NewRenewedDate": "2016-09-28",
        "NewDueDate": "2018-08-05"
      },
      {
        "InternalId": "5c1b758ea86371b00a65820b",
        "SNo": 17,
        "CreatedDate": "2018-05-15",
        "SubscriptionNo": "5c1b758e8d96d992d35bf01e",
        "CustomerName": "Latisha Holder",
        "TypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "Address1": "715 Bassett Avenue",
        "Address2": "Somerset",
        "Address3": "Oklahoma, 6751",
        "City": "Oceola",
        "State": "Illinois",
        "Country": "Federated States Of Micronesia",
        "Pin": "9096A",
        "Email": "latishaholder@duflex.com",
        "Mobile": "+1 (993) 414-2908",
        "Phone": "+1 (865) 495-2964",
        "ModifiedDate": "2017-07-03",
        "Comments": "Anim ex eu adipisicing occaecat cupidatat commodo dolore sint minim aute. Nostrud mollit tempor dolor non officia aute excepteur adipisicing consectetur aute do culpa qui est. Et ad est duis exercitation aute nostrud deserunt.\r\n",
        "DueDate": "2016-11-26",
        "IsInvalid": true,
        "CreatedByUserName": "Johns",
        "LoyaltyUserId": 1919,
        "RenewedDate": "2016-05-23",
        "NewTypeId": [
          {
            "TypeId": 3,
            "Name": "Yearly",
            "Days": "365"
          }
        ],
        "NewLoyaltyUserId": 1919,
        "NewRenewedDate": "2016-05-23",
        "NewDueDate": "2016-11-26"
      }
    ];

    return data.map(res => {
      const data = res as Subscriber;
      return data;
    });

  }



}
