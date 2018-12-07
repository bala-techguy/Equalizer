import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service'
import { SubscriptionTypeService } from '../../services/subscription-type.service'
import { ActivatedRoute } from '@angular/router';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-crud-subscribers',
  templateUrl: './crud-subscribers.component.html',
  styleUrls: ['./crud-subscribers.component.css']
})
export class CrudSubscribersComponent implements OnInit {

  action: string;
  types: string[];
  today: Date;

  constructor(private subscriberService: SubscriberService, private route: ActivatedRoute, private subscriptionType: SubscriptionTypeService) { }
  submitted: boolean;
  formControls = this.subscriberService.subscribersForm.controls;

  ngOnInit() {
    this.action = this.route.snapshot.data['action'];
    var values = [];
    this.subscriptionType.getSubscriptionType().forEach(function (value) {
      values.push(value.Name); 
    });
    this.types = values;
    console.log (this.currentDate());


    // if (this.action == 'Add'){
    //   console.log(this.action);
    //   this.subscriberService.subscribersForm.controls['CreatedDate'].setValue(this.currentDate(), {onlySelf: true});
    // }

  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0,10);
  }

  onSubmit() {
    this.submitted = true;
    if (this.subscriberService.subscribersForm.valid) {
      //if (this.subscriberService.subscribersForm.get('').value == null)
      //insert
      this.submitted = false;
    }

  }

}
