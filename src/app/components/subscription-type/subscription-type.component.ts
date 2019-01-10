import { Component, OnInit } from '@angular/core';
import {SubscriptionTypeService} from '../../services/subscription-type.service'

@Component({
  selector: 'app-subscription-type',
  templateUrl: './subscription-type.component.html',
  styleUrls: ['./subscription-type.component.css']
})
export class SubscriptionTypeComponent implements OnInit {

  subscriptionTypes: any[];
  dtOptions: any = {};

  constructor(public subscriptionTypeService: SubscriptionTypeService) { }

  ngOnInit() {

    this.subscriptionTypes = this.subscriptionTypeService.getSubscriptionType();

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
