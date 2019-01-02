import { Component, OnInit } from '@angular/core';
import {LoyaltyUserService} from '../../services/loyalty-user.service'

@Component({
  selector: 'app-loyalty-user',
  templateUrl: './loyalty-user.component.html',
  styleUrls: ['./loyalty-user.component.css']
})
export class LoyaltyUserComponent implements OnInit {

  
  loyaltyUsers: any[];
  dtOptions: any = {};

  constructor(public loyaltyUserService: LoyaltyUserService) { }

  ngOnInit() {

    this.loyaltyUsers = this.loyaltyUserService.getLoyaltyUsers();
    console.log(this.loyaltyUsers);

    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'copy',
        'print',
        'excel'
      ]
    };

  }

}
