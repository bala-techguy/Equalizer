import { Injectable } from '@angular/core';
import { Complaint } from '../models/complaint';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  complaints: Observable<Complaint[]>;

  constructor() { }

  complaintsForm = new FormGroup({

    InternalId: new FormControl(null),
    ComplaintId: new FormControl(''),
    SubscriptionNo: new FormControl(''),
    Description: new FormControl(''),
    Comments: new FormControl(''),
    Status: new FormControl(''),
    CreatedDate: new FormControl(''),
    ModifiedDate: new FormControl(''),

  })

  insertComplaint(model) {

    console.log(model);
    // After writing the values into database
    this.complaintsForm.reset();
  }

  editComplaint(model) {

    console.log(model);
    // After writing the values into database
    this.complaintsForm.reset();
  }

  deleteComplaint(model) {
    console.log(model);
    this.complaintsForm.reset();
  }

  loadForm(sub) {
    console.log(sub);
    this.complaintsForm.setValue(sub);
  }

  getComplaints() {

    let data = [
      {
        "InternalId": "5c1a45fe314a699432c4bbdb",
        "SubscriptionNo": "6749A",
        "ComplaintId": 4891,
        "Description": "Ex tempor non reprehenderit duis voluptate. Eu occaecat reprehenderit aliqua ad minim pariatur do incididunt mollit dolore occaecat. Irure commodo nostrud magna fugiat ullamco commodo in. Sunt culpa ullamco id et consequat minim incididunt ex officia amet ipsum dolor nulla cupidatat. Id nostrud cillum mollit adipisicing aute. Aliquip nostrud non nostrud nostrud ex.\r\n",
        "Comments": "Pariatur mollit minim nisi dolore aliqua laboris quis deserunt aliquip elit exercitation proident fugiat. Eiusmod magna incididunt anim proident cupidatat veniam culpa. Aliqua irure minim amet aute. Non do irure velit nisi elit occaecat.\r\n",
        "Status": "Processing",
        "CreatedDate": "2017-07-20",
        "ModifiedDate": "2016-04-09"
      },
      {
        "InternalId": "5c1a45fe1a70d6872f7522de",
        "SubscriptionNo": "4440A",
        "ComplaintId": 7889,
        "Description": "Ipsum eiusmod excepteur deserunt Lorem cupidatat laboris qui et et pariatur. Qui pariatur adipisicing aliqua reprehenderit fugiat excepteur incididunt. Quis esse adipisicing dolor ut cillum. Consequat Lorem ut aute fugiat excepteur sint culpa non consequat eiusmod. Ullamco nulla velit exercitation anim sit reprehenderit velit.\r\n",
        "Comments": "Sint irure sit ut dolore consequat deserunt sunt eu veniam aute. Cupidatat laboris proident sunt esse nisi aute sit id mollit veniam non quis cupidatat. Tempor laborum amet dolor proident amet.\r\n",
        "Status": "New",
        "CreatedDate": "2016-06-02",
        "ModifiedDate": "2018-07-27"
      },
      {
        "InternalId": "5c1a45feab5d8176e9f1f4f5",
        "SubscriptionNo": "883A",
        "ComplaintId": 8938,
        "Description": "Irure irure tempor exercitation laboris dolore occaecat aliqua elit amet exercitation eiusmod deserunt proident. Anim enim dolor id et eiusmod aute cupidatat est tempor aute aute ullamco. Duis velit consequat fugiat ex duis.\r\n",
        "Comments": "Laboris quis do aliquip duis culpa ea ipsum magna voluptate in veniam sit. Dolore dolor excepteur velit occaecat est eu do proident occaecat officia velit irure. Reprehenderit ullamco in id dolor nisi adipisicing velit nostrud sint reprehenderit enim quis. In fugiat deserunt consectetur in velit magna quis labore.\r\n",
        "Status": "Closed",
        "CreatedDate": "2017-08-01",
        "ModifiedDate": "2017-07-29"
      },
      {
        "InternalId": "5c1a45febb4c9d00c86c0078",
        "SubscriptionNo": "8859A",
        "ComplaintId": 2540,
        "Description": "Et sint duis deserunt non minim ipsum id. Minim esse deserunt et fugiat voluptate exercitation aute et nostrud dolor tempor id duis. Eiusmod aute fugiat ex aliquip et laboris ea ea cupidatat ex elit aute. Irure Lorem quis cupidatat amet nostrud velit magna officia excepteur officia.\r\n",
        "Comments": "Ullamco officia id mollit dolore. Eu ad sit quis quis. Consequat voluptate ut anim et tempor consectetur aliqua tempor excepteur. Sunt sunt consectetur eiusmod commodo irure voluptate amet nostrud eiusmod ad reprehenderit. Culpa commodo eiusmod aute deserunt laboris enim. Est laboris ullamco sint quis ex. Mollit sunt culpa nostrud sunt aute eiusmod laboris minim Lorem sit velit occaecat elit reprehenderit.\r\n",
        "Status": "Closed",
        "CreatedDate": "2018-09-22",
        "ModifiedDate": "2014-11-03"
      },
      {
        "InternalId": "5c1a45fe1ab67483803b80af",
        "SubscriptionNo": "4119A",
        "ComplaintId": 5815,
        "Description": "Incididunt cupidatat nostrud aute excepteur dolor sit. Nostrud eiusmod irure eiusmod dolore aute consequat eu aliquip dolore aliqua enim dolore. Pariatur ad officia aliquip id.\r\n",
        "Comments": "Irure pariatur nisi qui laborum laboris quis est nostrud nostrud. Irure veniam ea amet elit. Est dolor ad irure mollit elit et aute ullamco laboris eu eu enim ea. Id id esse anim id velit qui cupidatat incididunt pariatur commodo. Tempor aliquip ullamco consectetur do veniam occaecat dolore irure in Lorem tempor ex. Pariatur quis consectetur dolor magna non esse aliqua quis incididunt ad laborum ullamco. Eu magna pariatur duis id nulla est irure consequat nulla dolor duis.\r\n",
        "Status": "Closed",
        "CreatedDate": "2015-02-21",
        "ModifiedDate": "2014-07-14"
      },
      {
        "InternalId": "5c1a45fe95186d39452f93e2",
        "SubscriptionNo": "9112A",
        "ComplaintId": 9469,
        "Description": "Eiusmod enim ullamco irure aute ut. Cillum in pariatur non irure ex cillum eiusmod. Amet et eiusmod ipsum anim aliquip et ad aliqua sunt. Laborum Lorem tempor cupidatat dolore laboris ad in laborum velit. Adipisicing aute dolor fugiat officia aute qui. Officia cillum eiusmod exercitation enim eiusmod officia pariatur incididunt incididunt voluptate qui.\r\n",
        "Comments": "Enim tempor magna eu tempor id excepteur proident sint. Labore dolor ipsum consequat exercitation reprehenderit laboris ex do nisi officia. Commodo ex aliqua ex anim exercitation do quis ullamco. Mollit anim nisi commodo duis consectetur velit sit anim esse sunt nostrud in.\r\n",
        "Status": "New",
        "CreatedDate": "2018-01-09",
        "ModifiedDate": "2018-02-17"
      },
      {
        "InternalId": "5c1a45fe9b0aa71f1856d9bd",
        "SubscriptionNo": "6640A",
        "ComplaintId": 8586,
        "Description": "Enim commodo labore laboris irure. Officia cupidatat exercitation occaecat culpa officia quis et enim adipisicing excepteur et labore ut labore. Labore laboris magna nulla exercitation et irure pariatur et pariatur deserunt eu dolor deserunt id. Quis cupidatat commodo deserunt adipisicing minim sit velit consequat eiusmod sunt veniam ex qui nisi. Dolore anim anim reprehenderit quis elit reprehenderit fugiat eiusmod.\r\n",
        "Comments": "Sunt reprehenderit fugiat occaecat aliqua. Consequat laborum do ea tempor qui occaecat consequat adipisicing proident dolore culpa sint. Nulla cillum eiusmod nisi aliquip ipsum ullamco irure dolor ipsum occaecat ullamco aute ipsum. Aute velit officia do commodo aliquip enim sunt id magna. Ipsum cupidatat laborum nulla voluptate irure. Enim magna cillum dolor quis excepteur in anim culpa aliqua non id. Adipisicing elit labore quis mollit labore.\r\n",
        "Status": "Processing",
        "CreatedDate": "2016-01-12",
        "ModifiedDate": "2018-06-12"
      },
      {
        "InternalId": "5c1a45feafc1151c2a78f944",
        "SubscriptionNo": "2464A",
        "ComplaintId": 2035,
        "Description": "Nulla do dolor do exercitation. Tempor aliqua ea elit ipsum. In exercitation officia incididunt ad do aliqua deserunt aliquip consequat id et magna esse ex. Ex duis officia est ea Lorem dolore consequat.\r\n",
        "Comments": "Elit et anim Lorem sunt. Sunt aliqua proident veniam ipsum ullamco ut. In aliquip ullamco excepteur ullamco laboris quis ad laborum laboris sit ea consequat. Pariatur eu dolor proident magna occaecat ad fugiat deserunt dolor ea adipisicing aliqua sunt minim. Sit reprehenderit ad officia labore ipsum dolore officia ex cillum.\r\n",
        "Status": "Processing",
        "CreatedDate": "2014-04-19",
        "ModifiedDate": "2017-07-29"
      },
      {
        "InternalId": "5c1a45fe3b4ee9fc240dcd2e",
        "SubscriptionNo": "8395A",
        "ComplaintId": 6733,
        "Description": "Eiusmod mollit aliquip duis consequat aliquip non magna nulla veniam. Incididunt aliqua ex consectetur magna officia exercitation culpa elit aliqua nisi. Sint veniam excepteur aliqua anim. Veniam laboris dolore nisi reprehenderit. Exercitation deserunt adipisicing proident est pariatur fugiat. Deserunt ut amet ipsum est.\r\n",
        "Comments": "Ea laboris ex eiusmod aliquip aliquip irure duis id. Nostrud ullamco quis pariatur irure fugiat pariatur ullamco non Lorem consequat ex velit est sunt. Incididunt nisi amet aliqua consequat excepteur cillum. Sunt amet culpa irure id ad cillum. Magna in proident esse culpa fugiat consequat elit commodo magna quis. Amet labore consequat Lorem quis cillum excepteur nulla amet ullamco nisi.\r\n",
        "Status": "Processing",
        "CreatedDate": "2015-12-16",
        "ModifiedDate": "2018-12-09"
      },
      {
        "InternalId": "5c1a45feb516f1df0d4d46f2",
        "SubscriptionNo": "4702A",
        "ComplaintId": 6351,
        "Description": "Anim anim dolore quis eiusmod. Non elit voluptate Lorem minim ex enim eu Lorem nisi officia qui. Officia irure pariatur nostrud adipisicing quis consectetur occaecat dolor nulla ut sit. Lorem et amet ut minim. Occaecat magna nisi et aute non aliqua Lorem est exercitation aliquip. Incididunt nulla labore sint aute aliqua excepteur fugiat fugiat. Amet voluptate ex reprehenderit pariatur aliquip ea.\r\n",
        "Comments": "Consequat duis do consequat ut. Aliquip non cupidatat fugiat incididunt dolor duis. Occaecat sunt enim in est aliqua velit et elit ad tempor est qui sit. Dolor fugiat in pariatur cillum ut quis magna nisi elit irure excepteur labore adipisicing minim.\r\n",
        "Status": "Closed",
        "CreatedDate": "2015-10-25",
        "ModifiedDate": "2015-04-04"
      },
      {
        "InternalId": "5c1a45fe047db7007f130b41",
        "SubscriptionNo": "5375A",
        "ComplaintId": 4118,
        "Description": "Dolore aliquip eu incididunt Lorem consequat mollit magna. Irure eu proident nisi deserunt do qui laborum. Lorem eiusmod ea anim eu do deserunt proident deserunt eu pariatur. Consectetur ea aliquip tempor eiusmod.\r\n",
        "Comments": "Irure culpa in sit laborum Lorem aute esse duis culpa dolore fugiat in. Do Lorem sit ad cillum non. Est cupidatat cupidatat ea et ex ea nisi nulla ullamco. Mollit consectetur consectetur nulla sit sint. Irure labore est commodo ut eiusmod nostrud in occaecat. Velit non mollit aliquip fugiat pariatur elit consectetur aute veniam.\r\n",
        "Status": "New",
        "CreatedDate": "2014-06-30",
        "ModifiedDate": "2014-04-02"
      },
      {
        "InternalId": "5c1a45fe0fe05f60d715a1b8",
        "SubscriptionNo": "8495A",
        "ComplaintId": 6124,
        "Description": "Eu culpa veniam commodo commodo consequat. Exercitation id fugiat aliquip nisi labore laborum veniam sunt sint dolor Lorem et culpa ipsum. Aliqua ut quis sint aliquip sint. Eiusmod cupidatat sint esse consectetur laboris proident. Ex ut sit dolore consectetur voluptate. Sunt eu anim aliquip est ea fugiat ut eiusmod occaecat irure sunt.\r\n",
        "Comments": "Aliquip quis exercitation laboris minim. Aute amet aliqua eiusmod amet nostrud pariatur occaecat amet culpa nulla culpa esse proident. Ut eu do occaecat cupidatat eiusmod sit commodo amet sint. Est ex id occaecat eu. Pariatur quis pariatur proident esse enim aliquip minim. Adipisicing nostrud ut et eu sint et. Tempor laboris do quis aute eiusmod id tempor exercitation eiusmod cupidatat sunt ut ipsum.\r\n",
        "Status": "Processing",
        "CreatedDate": "2017-11-05",
        "ModifiedDate": "2017-11-25"
      },
      {
        "InternalId": "5c1a45fea951da0eea42f74b",
        "SubscriptionNo": "2735A",
        "ComplaintId": 1694,
        "Description": "Elit ex do anim labore. Aliqua laborum occaecat officia qui aliquip ad do ex anim elit dolor. Nostrud ea ut deserunt proident tempor exercitation non in. Qui occaecat irure aute nulla id cupidatat voluptate ipsum. Ea veniam id pariatur nisi anim minim magna incididunt quis do aute adipisicing minim. Labore amet eiusmod sunt elit eu. Laborum adipisicing et magna culpa tempor ad duis magna duis ex et.\r\n",
        "Comments": "Consequat anim Lorem ullamco ex commodo nulla aliqua cillum exercitation cupidatat exercitation anim est laborum. Elit ea veniam labore deserunt labore ut elit quis ullamco dolor nostrud labore pariatur exercitation. Consectetur fugiat sint et esse ipsum non velit non.\r\n",
        "Status": "New",
        "CreatedDate": "2014-12-26",
        "ModifiedDate": "2016-01-16"
      },
      {
        "InternalId": "5c1a45fe6b0d13a2610c1e44",
        "SubscriptionNo": "1897A",
        "ComplaintId": 6481,
        "Description": "Reprehenderit consequat id esse sint et ut laborum dolore nisi. Aliqua culpa ipsum est sint est enim nisi dolor nostrud dolor labore sunt dolor. Minim tempor do enim irure id dolor ad cillum nostrud aute. Anim irure aliqua enim ipsum tempor qui fugiat irure ut laborum exercitation veniam eu. Anim sunt tempor ex veniam.\r\n",
        "Comments": "Adipisicing cillum quis dolor laboris aute mollit. Laborum commodo pariatur duis consequat velit esse culpa. Ex sint ad amet qui amet esse id incididunt. Fugiat duis consequat nulla ex tempor deserunt labore sunt non tempor irure. Adipisicing laborum commodo sit exercitation nostrud fugiat eu excepteur. Elit quis exercitation duis sit.\r\n",
        "Status": "New",
        "CreatedDate": "2017-11-28",
        "ModifiedDate": "2017-02-03"
      },
      {
        "InternalId": "5c1a45fe88cb0c374b002d5b",
        "SubscriptionNo": "5049A",
        "ComplaintId": 4371,
        "Description": "Enim excepteur ad non dolor aute sint enim anim consequat amet qui ullamco. Nisi ipsum sit incididunt esse adipisicing adipisicing laboris est dolor officia aliqua fugiat. Officia quis consequat aliquip aute exercitation incididunt ex enim.\r\n",
        "Comments": "Deserunt excepteur ea ipsum labore aliqua est anim veniam. Et dolore tempor ipsum nulla non tempor cillum excepteur cupidatat aliqua qui reprehenderit mollit proident. Fugiat adipisicing magna Lorem qui dolor non duis Lorem non. Occaecat esse officia mollit est. Ipsum est ullamco ipsum occaecat pariatur ullamco sint laboris. Laborum duis dolore elit excepteur officia officia adipisicing proident quis nulla consequat. Ipsum sunt exercitation anim velit et excepteur elit sit qui consequat duis duis officia ex.\r\n",
        "Status": "Processing",
        "CreatedDate": "2016-12-23",
        "ModifiedDate": "2018-08-05"
      },
      {
        "InternalId": "5c1a45fe9e40e149524c9e3b",
        "SubscriptionNo": "7528A",
        "ComplaintId": 7162,
        "Description": "Laboris consequat mollit excepteur irure eiusmod in est minim deserunt eiusmod ut in. Dolor excepteur tempor velit est mollit duis. Nulla aute nulla aliqua amet consequat ullamco fugiat deserunt nulla aute amet qui mollit. Laborum deserunt ullamco voluptate proident commodo nostrud sit deserunt commodo quis ipsum consectetur aute. Consequat culpa est voluptate labore sit dolor in commodo irure. Nostrud irure est aute id do eiusmod cupidatat. Consequat ad excepteur deserunt dolore.\r\n",
        "Comments": "Sit eiusmod duis adipisicing exercitation labore aliqua irure est. Elit est nulla eu in excepteur aliqua. Nostrud Lorem aliquip amet commodo ea aliqua do non cupidatat Lorem aliqua dolore. Esse nisi reprehenderit nisi cillum amet nulla dolore pariatur excepteur. Eiusmod est reprehenderit in cupidatat esse ad consequat non ad incididunt ex do. Labore sint do aute velit sit commodo enim reprehenderit eiusmod amet. Aute ea minim ea non exercitation deserunt elit fugiat mollit fugiat veniam eu voluptate anim.\r\n",
        "Status": "New",
        "CreatedDate": "2016-07-18",
        "ModifiedDate": "2015-08-11"
      },
      {
        "InternalId": "5c1a45fe522da8c2236fef01",
        "SubscriptionNo": "2749A",
        "ComplaintId": 2513,
        "Description": "Eu laborum occaecat do dolor ex id. Ipsum adipisicing quis pariatur commodo. Eiusmod ipsum labore quis excepteur enim proident in. Ex nisi sint duis Lorem adipisicing nostrud. Amet culpa enim amet reprehenderit deserunt tempor id incididunt non amet deserunt sit deserunt commodo.\r\n",
        "Comments": "Nulla labore esse ex ad pariatur do ex duis. Minim velit culpa tempor dolore ea enim nostrud incididunt reprehenderit. Lorem commodo anim nulla incididunt anim nostrud esse. Mollit excepteur tempor deserunt adipisicing enim. Fugiat consectetur duis id irure magna non deserunt sint Lorem quis nostrud est voluptate culpa. Qui cillum ipsum culpa sunt magna ea.\r\n",
        "Status": "Processing",
        "CreatedDate": "2016-07-15",
        "ModifiedDate": "2017-09-05"
      },
      {
        "InternalId": "5c1a45fe0825bb784f4ab373",
        "SubscriptionNo": "7750A",
        "ComplaintId": 2804,
        "Description": "Laboris ex eiusmod amet voluptate fugiat ea ut aliqua duis ut eu cillum occaecat excepteur. Cillum duis eu proident laborum pariatur et sint consequat. Non magna dolor mollit et est nisi non ipsum sunt nulla pariatur id voluptate. Pariatur ut aute reprehenderit ut sit eiusmod Lorem culpa officia aute pariatur proident ut sunt.\r\n",
        "Comments": "Aute ex ipsum sit occaecat reprehenderit amet laborum minim esse commodo dolore est qui. Mollit tempor laborum cillum eu reprehenderit irure sint adipisicing cillum consequat nostrud sit fugiat. Velit pariatur nulla dolore dolore eiusmod do magna amet veniam. Fugiat elit veniam id nostrud dolor in officia aute.\r\n",
        "Status": "Closed",
        "CreatedDate": "2015-06-02",
        "ModifiedDate": "2016-02-07"
      },
      {
        "InternalId": "5c1a45fe57d24244449ee907",
        "SubscriptionNo": "4453A",
        "ComplaintId": 3610,
        "Description": "Velit dolor proident ut aute ipsum nulla aute irure cillum eu ullamco. Tempor enim in dolore ut pariatur qui eu voluptate officia ea nostrud et commodo enim. Velit sit laborum elit excepteur ipsum aute culpa.\r\n",
        "Comments": "Amet laboris veniam sunt sit voluptate aliquip officia. Sit incididunt ut sit ex commodo consectetur proident ex anim culpa in occaecat. Aliquip culpa do cupidatat eu voluptate anim. Nulla consectetur culpa amet nulla irure Lorem id officia sint non pariatur nostrud duis qui. Officia pariatur deserunt dolor anim cupidatat mollit quis. Irure adipisicing aliquip pariatur non incididunt. Laboris dolor occaecat proident adipisicing.\r\n",
        "Status": "Closed",
        "CreatedDate": "2018-09-06",
        "ModifiedDate": "2017-04-30"
      },
      {
        "InternalId": "5c1a45feb75e26b73cb1a080",
        "SubscriptionNo": "8510A",
        "ComplaintId": 3099,
        "Description": "Commodo anim deserunt nulla cillum mollit cupidatat exercitation do nisi qui ad irure aliquip anim. In deserunt eu labore elit laborum ea non laboris reprehenderit enim cupidatat aliquip consequat enim. Laboris irure laborum commodo officia tempor laborum culpa sunt in est veniam. Laboris eiusmod ipsum deserunt veniam irure.\r\n",
        "Comments": "Ea excepteur sint et pariatur mollit veniam voluptate nulla eu fugiat nulla. In sunt irure magna labore. Enim ad fugiat velit exercitation dolor est tempor cupidatat ad eiusmod aute ex qui. Officia anim eiusmod esse deserunt. Excepteur ipsum irure et pariatur culpa anim sint veniam laborum.\r\n",
        "Status": "Closed",
        "CreatedDate": "2014-02-02",
        "ModifiedDate": "2014-02-28"
      }
    ];

    return data.map(res => {
      const data = res as Complaint;
      return data;
    });

  }

}
