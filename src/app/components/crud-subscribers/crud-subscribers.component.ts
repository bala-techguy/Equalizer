import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service'
import { SubscriptionTypeService } from '../../services/subscription-type.service'
import { Subscriber } from '../../models/subscriber';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private subscriberService: SubscriberService,
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionType: SubscriptionTypeService
  ) { }
  submitted: boolean;
  formControls = this.subscriberService.subscribersForm.controls;

  ngOnInit() {
    this.action = this.route.snapshot.data['action'];
    var values = [];
    this.subscriptionType.getSubscriptionType().forEach(function (value) {
      values.push(value.Name);
    });
    this.types = values;
    console.log(this.currentDate());


    if (this.action == 'Add') {
      console.log(this.action);
      this.subscriberService.subscribersForm.controls['CreatedDate'].setValue(this.currentDate(), { onlySelf: true });
    }
    else {
      
    }
    

  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  onSubmit(model: Subscriber, isValid: boolean) {
    this.submitted = true;
    if (isValid) {
      if (this.subscriberService.subscribersForm.get('InternalId').value == null) {
        //console.log(model, isValid);
        this.subscriberService.insertSubscribers(model);
        this.router.navigate(['/subscribers']);
      }

      this.submitted = false;
    }

  }

}
