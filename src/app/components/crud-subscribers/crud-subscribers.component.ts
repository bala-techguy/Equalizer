import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service'
import { CommonService } from '../../services/common.service'
import { SubscriptionTypeService } from '../../services/subscription-type.service'
import { Subscriber } from '../../models/subscriber';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { createEmptyStateSnapshot } from '@angular/router/src/router_state';

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
    public commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionType: SubscriptionTypeService,
    public datepipe: DatePipe
  ) { }
  submitted: boolean;
  formControls = this.subscriberService.subscribersForm.controls;

  ngOnInit() {
    this.action = this.route.snapshot.data['action'];
    //console.log(this.subscriberService.subscribersForm.get('TypeId').value[0].Name);
    var values = [];
    this.subscriptionType.getSubscriptionType().forEach(function (value) {
      values.push(value.Name);
      //console.log(value.Name);
    });
    this.types = values;
    //console.log(this.currentDate());


    if (this.action == 'Add') {
      console.log(this.action);
      console.log(this.commonService.randomNumber());
      this.subscriberService.subscribersForm.reset();
      this.subscriberService.subscribersForm.enable();
      this.subscriberService.subscribersForm.controls['SubscriptionNo'].disable();
      this.subscriberService.subscribersForm.controls['CreatedDate'].disable();
      this.subscriberService.subscribersForm.controls['ModifiedDate'].disable();
      this.subscriberService.subscribersForm.controls['SubscriptionNo'].setValue(this.commonService.randomNumber(), { onlySelf: true });
      this.subscriberService.subscribersForm.controls['CreatedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
      this.subscriberService.subscribersForm.controls['ModifiedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
    }
    if (this.action == 'View' || this.action == 'Delete') {
      this.subscriberService.subscribersForm.disable();
    }
    if (this.action == 'Modify') {
      this.subscriberService.subscribersForm.enable();
      this.subscriberService.subscribersForm.controls['CreatedDate'].disable();
      this.subscriberService.subscribersForm.controls['ModifiedDate'].disable();
      this.subscriberService.subscribersForm.controls['TypeId'].setValue(this.subscriberService.subscribersForm.get('TypeId').value[0].Name, { onlySelf: true });
      this.subscriberService.subscribersForm.controls['TypeId'].disable();
      this.subscriberService.subscribersForm.controls['LoyaltyUserId'].disable();
      this.subscriberService.subscribersForm.controls['DueDate'].disable();
      this.subscriberService.subscribersForm.controls['RenewedDate'].disable();
    }


  }

  renewClick() {

    this.subscriberService.subscribersForm.controls['NewTypeId'].setValue(this.subscriberService.subscribersForm.get('NewTypeId').value[0].Name, { onlySelf: true });

  }

  saveRenew() {
    this.subscriberService.subscribersForm.controls['TypeId'].setValue(this.subscriberService.subscribersForm.get('NewTypeId').value, { onlySelf: true });
    this.subscriberService.subscribersForm.controls['LoyaltyUserId'].setValue(this.subscriberService.subscribersForm.get('NewLoyaltyUserId').value, { onlySelf: true });
    this.subscriberService.subscribersForm.controls['DueDate'].setValue(this.subscriberService.subscribersForm.get('NewDueDate').value, { onlySelf: true });
    this.subscriberService.subscribersForm.controls['RenewedDate'].setValue(this.subscriberService.subscribersForm.get('NewRenewedDate').value, { onlySelf: true });

  }



  delete(model) {

    this.subscriberService.deleteSubscriber(model);
    this.router.navigate(['/subscribers']);

  }

  onSubmit(model: Subscriber, isValid: boolean) {
    this.submitted = true;
    if (isValid) {
      if (this.subscriberService.subscribersForm.get('InternalId').value == null) {
        //console.log(model, isValid);
        this.subscriberService.insertSubscriber(model);
        this.router.navigate(['/subscribers']);
      }
      else
        if (this.action == 'Modify') {
          this.subscriberService.editSubscriber(model);
          this.router.navigate(['/subscribers']);
        }

      this.submitted = false;
    }

  }

}
