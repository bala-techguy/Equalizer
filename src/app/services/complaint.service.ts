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
    SubscriptionNo: new FormControl('',Validators.required),
    Description: new FormControl('',[Validators.required, Validators.minLength(20)]),
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
        "InternalId": "5c1b4f6a0ca4baf7ad09d496",
        "SubscriptionNo": "9098A",
        "ComplaintId": 3185,
        "Description": "Proident sint ad minim reprehenderit officia. Fugiat ad tempor ipsum ad excepteur elit. Enim pariatur tempor dolor veniam aute enim amet consequat elit cillum officia sunt qui qui.\r\n",
        "Comments": "Dolore tempor irure aute commodo laborum proident tempor enim consequat aliquip est minim ullamco. Magna veniam id minim aliqua officia qui pariatur do eu id minim ad magna commodo. Sit tempor aute exercitation amet sit ullamco ex qui cupidatat minim ipsum. Laboris veniam quis sunt et eiusmod duis Lorem ipsum incididunt qui ut ipsum excepteur aliquip.\r\n",
        "Status": "New",
        "CreatedDate": "2017-02-07",
        "ModifiedDate": "2014-04-15"
      },
      {
        "InternalId": "5c1b4f6a0c341a005d181c51",
        "SubscriptionNo": "8031A",
        "ComplaintId": 7723,
        "Description": "Nostrud irure irure Lorem ut cupidatat culpa. Amet ad fugiat est officia cillum amet duis nisi id nisi deserunt. Minim magna ad ea proident dolor. Veniam proident officia laborum reprehenderit reprehenderit in enim. Excepteur consectetur velit Lorem consequat aliquip laborum eiusmod ullamco tempor. Quis quis eiusmod fugiat pariatur veniam non non.\r\n",
        "Comments": "Lorem irure dolore anim minim sunt velit nulla et adipisicing. Voluptate tempor ipsum occaecat occaecat nulla duis eiusmod veniam reprehenderit enim irure amet consequat. Culpa ad sunt esse consequat voluptate eu aliquip magna. Dolore cillum do veniam esse eu cillum reprehenderit fugiat excepteur qui. Sunt occaecat pariatur exercitation sunt ea ad ullamco velit eu.\r\n",
        "Status": "Closed",
        "CreatedDate": "2017-08-04",
        "ModifiedDate": "2018-07-10"
      },
      {
        "InternalId": "5c1b4f6a979af8626a16cc3a",
        "SubscriptionNo": "8465A",
        "ComplaintId": 4120,
        "Description": "Proident tempor et aliquip elit ad tempor in ea duis. Dolor irure eiusmod duis sit. Reprehenderit proident est consequat aliquip ad quis dolor duis non. Do ex nulla irure magna quis ullamco fugiat. Esse do tempor non nostrud dolor cupidatat cupidatat ea cillum anim culpa.\r\n",
        "Comments": "Ipsum est qui fugiat ut consectetur pariatur dolore nisi officia. Pariatur ut occaecat non esse voluptate eiusmod sit do non. Voluptate commodo occaecat elit est veniam eu. Et esse nostrud adipisicing sit enim dolore anim nulla incididunt. In nostrud aute ipsum officia dolor ullamco elit minim ipsum cupidatat veniam aute id. Veniam voluptate tempor exercitation magna officia occaecat eiusmod commodo voluptate enim minim labore esse Lorem. Nulla sint incididunt incididunt irure laborum veniam commodo.\r\n",
        "Status": "New",
        "CreatedDate": "2017-06-07",
        "ModifiedDate": "2018-09-25"
      },
      {
        "InternalId": "5c1b4f6a98e21405ef43cd14",
        "SubscriptionNo": "5307A",
        "ComplaintId": 7969,
        "Description": "Consequat reprehenderit consectetur culpa nisi elit dolore dolore. Cupidatat veniam mollit ad cupidatat dolor aute ea incididunt eiusmod. Officia culpa incididunt labore et. Labore officia fugiat deserunt laborum tempor aliqua deserunt in enim duis magna. Eiusmod aute cillum magna nisi sit fugiat do mollit ipsum aliquip consequat. In voluptate incididunt in ut reprehenderit. Culpa exercitation fugiat cupidatat Lorem ad.\r\n",
        "Comments": "Est dolor laborum velit ipsum laboris elit laborum pariatur occaecat elit sunt sunt commodo laboris. Mollit esse nulla cillum amet cupidatat exercitation pariatur do sit. Sunt id Lorem eu officia aliqua est dolore consectetur ut. Magna est exercitation sit cillum aliquip exercitation dolore sint minim sunt duis.\r\n",
        "Status": "In-Progress",
        "CreatedDate": "2014-03-14",
        "ModifiedDate": "2017-02-21"
      },
      {
        "InternalId": "5c1b4f6a2f501b36cfef9242",
        "SubscriptionNo": "711A",
        "ComplaintId": 3135,
        "Description": "Eiusmod Lorem duis dolor officia aliquip sit. Sit non labore veniam id nisi est eiusmod eiusmod pariatur minim fugiat ullamco. Minim dolor id elit eiusmod id fugiat ea. Est est aute enim labore deserunt reprehenderit excepteur ullamco amet laborum veniam eu aliquip.\r\n",
        "Comments": "Laborum minim adipisicing deserunt nisi voluptate amet. Reprehenderit magna excepteur eu fugiat quis elit labore nostrud adipisicing. Fugiat magna dolor Lorem culpa eiusmod commodo sit anim occaecat veniam sint nisi exercitation. Incididunt eu tempor elit labore voluptate mollit eu in laboris excepteur laborum do sint adipisicing. Commodo tempor ad sit ad exercitation qui in excepteur ad laborum irure officia consequat. Laboris veniam sint nulla veniam qui amet in ad sit veniam amet duis nulla aute.\r\n",
        "Status": "In-Progress",
        "CreatedDate": "2017-04-05",
        "ModifiedDate": "2017-11-27"
      },
      {
        "InternalId": "5c1b4f6a797485d6e7180757",
        "SubscriptionNo": "9945A",
        "ComplaintId": 5428,
        "Description": "Ex pariatur est ex ut ut esse eiusmod deserunt proident ea dolore. Ipsum aliquip minim cillum veniam voluptate consequat. Cillum minim laboris aute deserunt occaecat proident exercitation aliquip ad cillum aliquip. Eu qui esse amet nulla anim cillum dolore minim sunt. Officia minim in ex in deserunt occaecat occaecat reprehenderit aute.\r\n",
        "Comments": "Irure proident et et mollit reprehenderit nulla amet in laboris incididunt cillum nisi ullamco ad. Tempor laboris magna quis officia enim nulla exercitation qui labore nostrud dolor est nostrud velit. Et qui est dolore veniam fugiat tempor veniam qui.\r\n",
        "Status": "Closed",
        "CreatedDate": "2017-11-23",
        "ModifiedDate": "2014-11-24"
      },
      {
        "InternalId": "5c1b4f6ace2bcfb8897086c4",
        "SubscriptionNo": "5399A",
        "ComplaintId": 1200,
        "Description": "Lorem nulla consectetur magna irure est labore amet mollit elit. Aute sint officia exercitation et. Incididunt nostrud quis tempor in sint id elit consectetur. Ipsum irure eu nulla laboris adipisicing qui sint do non cupidatat ad consequat. Id consequat velit labore pariatur ipsum laboris ipsum dolore ullamco eu ut sint. Aute aute et laboris ea fugiat Lorem aliqua veniam non deserunt pariatur duis magna.\r\n",
        "Comments": "Aliquip ex ipsum elit consectetur et aliquip labore tempor nisi ex fugiat Lorem ut do. Nostrud duis ipsum sunt duis sint consectetur incididunt proident nulla Lorem occaecat. Enim commodo nostrud non non cillum duis mollit enim.\r\n",
        "Status": "In-Progress",
        "CreatedDate": "2016-08-03",
        "ModifiedDate": "2017-10-09"
      },
      {
        "InternalId": "5c1b4f6ac58a303c0b36c737",
        "SubscriptionNo": "6059A",
        "ComplaintId": 7828,
        "Description": "Duis quis nulla voluptate nisi do laborum pariatur aute dolore velit do est eu mollit. Labore do magna consectetur quis reprehenderit. Labore amet culpa nisi ad adipisicing veniam ipsum elit. Ex cupidatat nisi eu pariatur ipsum tempor. Laboris consequat enim nulla veniam minim est voluptate enim pariatur reprehenderit adipisicing aliqua irure id. Officia laborum occaecat nulla mollit deserunt aute sit ea. Eu proident nostrud eiusmod eiusmod proident ipsum aliquip pariatur nostrud.\r\n",
        "Comments": "Laborum nostrud Lorem mollit magna pariatur voluptate cupidatat. Aute commodo quis esse qui officia id officia voluptate id. Excepteur minim exercitation ad qui do do quis. Aute aute excepteur est voluptate aute excepteur ipsum cupidatat non aliquip nisi sunt nisi. Id sint ut ullamco ex.\r\n",
        "Status": "In-Progress",
        "CreatedDate": "2015-06-12",
        "ModifiedDate": "2018-08-26"
      },
      {
        "InternalId": "5c1b4f6a02f83898e367d5f5",
        "SubscriptionNo": "6976A",
        "ComplaintId": 9839,
        "Description": "Do elit laborum pariatur ipsum tempor magna occaecat labore consectetur qui ipsum. Tempor aliqua ea in aliqua excepteur aute eu excepteur. Ipsum cillum laborum est tempor amet eu pariatur quis eu labore mollit nisi veniam. Excepteur consequat elit sit laboris tempor ipsum sunt qui. Cillum adipisicing nisi sit in eiusmod ea pariatur fugiat anim proident enim. Non ullamco minim tempor deserunt amet deserunt tempor in cillum qui.\r\n",
        "Comments": "Ea non commodo in officia quis. Est nisi adipisicing minim velit culpa magna reprehenderit irure quis magna ex ea deserunt aute. Ea ullamco culpa reprehenderit ea nulla officia cupidatat labore aliquip nisi.\r\n",
        "Status": "In-Progress",
        "CreatedDate": "2016-07-04",
        "ModifiedDate": "2016-12-28"
      },
      {
        "InternalId": "5c1b4f6aabd14c23a6bba314",
        "SubscriptionNo": "6561A",
        "ComplaintId": 986,
        "Description": "Consequat do mollit ullamco tempor dolor dolore Lorem minim culpa ullamco. Ipsum excepteur ut voluptate velit sunt ut id. Consectetur in proident est irure laborum labore occaecat eu culpa esse aliquip laborum. Reprehenderit cupidatat aliqua reprehenderit mollit ipsum id. Adipisicing pariatur et enim officia mollit pariatur anim aliquip Lorem deserunt labore magna duis.\r\n",
        "Comments": "Esse ut exercitation nulla ea. Cupidatat exercitation fugiat duis Lorem ex. Aliquip mollit quis aute ad reprehenderit occaecat fugiat. Incididunt ullamco aliqua quis minim ad. Nisi occaecat mollit qui sint Lorem nostrud fugiat et cupidatat cillum.\r\n",
        "Status": "Closed",
        "CreatedDate": "2018-07-11",
        "ModifiedDate": "2015-12-10"
      },
      {
        "InternalId": "5c1b4f6a12a26561bc884b73",
        "SubscriptionNo": "5935A",
        "ComplaintId": 10000,
        "Description": "Qui est eu ullamco id do irure esse officia ea consectetur. Anim laboris non cillum tempor labore ut elit ex duis. Magna voluptate velit exercitation est. Deserunt eu et nulla consequat amet dolore Lorem. Do Lorem ullamco mollit non qui magna nostrud voluptate. Nulla officia qui labore sunt nulla et id incididunt anim ad occaecat.\r\n",
        "Comments": "Labore est nisi dolore sunt ipsum. Qui duis tempor et velit proident incididunt consequat occaecat Lorem velit ea irure. Fugiat elit nostrud mollit sunt culpa duis reprehenderit laboris Lorem duis qui ex id consequat. Eu aute Lorem non nostrud excepteur consectetur ea. Voluptate magna sint reprehenderit pariatur.\r\n",
        "Status": "New",
        "CreatedDate": "2018-08-10",
        "ModifiedDate": "2016-03-25"
      },
      {
        "InternalId": "5c1b4f6a16b8a824bdb13fef",
        "SubscriptionNo": "9357A",
        "ComplaintId": 9888,
        "Description": "Adipisicing mollit adipisicing cupidatat officia nostrud consequat. Veniam sint sint eiusmod amet ea excepteur. Mollit velit dolor nostrud tempor eu ad elit veniam anim est commodo. Laborum dolor labore sunt cillum do cupidatat veniam veniam.\r\n",
        "Comments": "Quis anim reprehenderit aliqua nulla exercitation excepteur. Ad elit exercitation qui dolor enim et aliquip nostrud quis anim reprehenderit duis eiusmod. Lorem ea officia reprehenderit exercitation deserunt sit id dolor irure incididunt quis amet non. Id quis labore consequat laboris qui sit reprehenderit est laborum ea labore amet. Voluptate officia non consequat commodo aute proident sunt id cillum mollit occaecat. Elit aliquip sunt consectetur adipisicing adipisicing voluptate sit qui id dolore deserunt eiusmod. Duis exercitation fugiat ad labore culpa do.\r\n",
        "Status": "In-Progress",
        "CreatedDate": "2016-12-15",
        "ModifiedDate": "2015-05-24"
      },
      {
        "InternalId": "5c1b4f6a3ed43af8b45f0cfd",
        "SubscriptionNo": "8026A",
        "ComplaintId": 7365,
        "Description": "Non cupidatat laboris ad nisi quis deserunt. Ea elit duis cillum duis irure dolor cupidatat exercitation amet labore adipisicing officia proident. Proident esse minim esse consequat ex. Non adipisicing est commodo voluptate eu tempor minim nisi est ex elit. Tempor et qui do culpa cillum esse voluptate. Adipisicing veniam labore cillum exercitation occaecat anim enim consectetur anim in mollit velit. Labore nostrud eu eiusmod ea magna do duis incididunt culpa reprehenderit non cillum cupidatat.\r\n",
        "Comments": "Enim cillum nostrud ullamco veniam commodo aliqua ut excepteur ullamco occaecat qui ad pariatur. Qui consequat aliqua exercitation ad aliquip voluptate eiusmod consectetur minim adipisicing consectetur aliquip duis. Occaecat enim id anim dolore in minim magna anim tempor quis Lorem esse minim amet. Lorem Lorem quis elit ea qui sunt aute pariatur culpa laboris consectetur eiusmod laborum consequat. Irure reprehenderit ipsum tempor occaecat laboris qui aute. Velit minim amet voluptate est culpa in occaecat consequat anim anim aliquip sunt quis.\r\n",
        "Status": "Closed",
        "CreatedDate": "2016-06-18",
        "ModifiedDate": "2015-11-24"
      },
      {
        "InternalId": "5c1b4f6a4696932eb344b87e",
        "SubscriptionNo": "7390A",
        "ComplaintId": 2198,
        "Description": "Occaecat veniam eu fugiat deserunt laborum ad. Ipsum incididunt nisi ex dolore. Ea adipisicing consequat ut Lorem nostrud consectetur anim laboris occaecat quis reprehenderit occaecat proident Lorem. Id labore dolore fugiat aute qui culpa duis in ex eu ex. Excepteur adipisicing in fugiat sit ipsum ut sint sit.\r\n",
        "Comments": "Labore ex anim consequat fugiat et ad aliqua id anim. Exercitation sunt ipsum aliqua elit dolor sunt ipsum reprehenderit excepteur ut ex. Deserunt anim fugiat reprehenderit nostrud deserunt Lorem amet ullamco in sunt dolore non Lorem ut. Occaecat enim dolor cupidatat anim.\r\n",
        "Status": "New",
        "CreatedDate": "2015-07-15",
        "ModifiedDate": "2017-10-31"
      },
      {
        "InternalId": "5c1b4f6a1984dfa4cb48b4b3",
        "SubscriptionNo": "4677A",
        "ComplaintId": 9668,
        "Description": "Nisi qui amet nulla amet consectetur occaecat pariatur ad sunt sint. Aute non in ullamco id non nulla. Dolore elit reprehenderit duis duis do eiusmod nulla reprehenderit.\r\n",
        "Comments": "Elit nulla consectetur ullamco occaecat aliquip deserunt commodo. Officia enim Lorem sit sunt cupidatat. Commodo in nisi ea duis. Deserunt consequat dolore incididunt do voluptate commodo occaecat officia fugiat velit. Esse sit culpa ad duis magna pariatur excepteur reprehenderit deserunt.\r\n",
        "Status": "In-Progress",
        "CreatedDate": "2015-12-21",
        "ModifiedDate": "2017-06-12"
      },
      {
        "InternalId": "5c1b4f6ab05e0c8dfd8bcfcb",
        "SubscriptionNo": "9499A",
        "ComplaintId": 6280,
        "Description": "Esse ex velit duis ea ullamco aliquip reprehenderit adipisicing esse dolore. Qui dolore minim nulla est eu labore excepteur incididunt culpa velit minim deserunt sit labore. Veniam minim do aliqua velit id id id in. Aute labore tempor deserunt consequat voluptate.\r\n",
        "Comments": "Minim aliqua pariatur qui tempor Lorem nisi eu duis commodo labore exercitation. Id qui velit proident id commodo nisi ut deserunt. Esse adipisicing duis aliquip consectetur nisi voluptate anim. Officia ullamco in Lorem exercitation.\r\n",
        "Status": "Closed",
        "CreatedDate": "2015-09-14",
        "ModifiedDate": "2018-02-26"
      },
      {
        "InternalId": "5c1b4f6aefbf381c9c7d958e",
        "SubscriptionNo": "5502A",
        "ComplaintId": 3532,
        "Description": "Ad veniam dolore elit exercitation reprehenderit aliquip nulla aliqua sint deserunt ipsum ullamco ex. Officia proident aliquip culpa consequat consequat incididunt. Eiusmod ipsum nulla commodo laboris in sit consectetur velit consequat. Nisi dolore qui ad officia dolore id et ex ut. Velit occaecat adipisicing magna eu cillum proident sit quis anim excepteur et voluptate proident sint. Aute enim ut sint est.\r\n",
        "Comments": "Culpa aliquip in consequat nulla anim laborum ea magna dolore. Proident commodo magna pariatur ullamco Lorem ut reprehenderit incididunt nostrud. Deserunt non sit culpa nostrud officia cupidatat cillum ea ea ad deserunt occaecat in. Labore non est consectetur dolore exercitation nisi. Quis consequat esse ea occaecat.\r\n",
        "Status": "New",
        "CreatedDate": "2016-05-04",
        "ModifiedDate": "2017-03-28"
      },
      {
        "InternalId": "5c1b4f6a7e6908d69230844b",
        "SubscriptionNo": "2369A",
        "ComplaintId": 8891,
        "Description": "Laboris eu velit ea ut excepteur id labore laborum proident velit voluptate elit. Mollit qui esse tempor sunt ut sint deserunt sit adipisicing culpa in do ea culpa. Qui labore eu Lorem Lorem laborum dolore aliquip duis et in.\r\n",
        "Comments": "Minim laborum ut officia eu et veniam qui sit veniam ea id sit aliqua est. Quis consectetur in aliquip mollit sit non qui occaecat fugiat id minim sunt magna laboris. Sint ut cillum occaecat cillum cillum excepteur. Officia esse aliqua ipsum sit id ad aute reprehenderit.\r\n",
        "Status": "Closed",
        "CreatedDate": "2015-01-09",
        "ModifiedDate": "2014-07-10"
      }
    ];

    return data.map(res => {
      const data = res as Complaint;
      return data;
    });

  }

}
