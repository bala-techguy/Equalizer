import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service'
import { SubscriptionTypeService } from '../../services/subscription-type.service'
import { Subscriber } from '../../models/subscriber';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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
    private subscriptionType: SubscriptionTypeService,
    public datepipe: DatePipe
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
      this.subscriberService.subscribersForm.reset();
      this.subscriberService.subscribersForm.enable();
      this.subscriberService.subscribersForm.controls['CreatedDate'].setValue(this.currentDate(), { onlySelf: true });
      this.subscriberService.subscribersForm.controls['ModifiedDate'].setValue(this.currentDate(), { onlySelf: true });
    }
    if (this.action == 'View' || this.action == 'Delete') {
      console.log(this.subscriberService.subscribersForm.controls.CreatedDate);
      //this.subscriberService.subscribersForm.controls['CreatedDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('CreatedDate').value), { onlySelf: true });
      //this.subscriberService.subscribersForm.controls['ModifiedDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('ModifiedDate').value), { onlySelf: true });
      //this.subscriberService.subscribersForm.controls['DueDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('DueDate').value), { onlySelf: true });
      //this.subscriberService.subscribersForm.controls['RenewedDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('RenewedDate').value), { onlySelf: true });
      this.subscriberService.subscribersForm.disable();
    }
    if (this.action == 'Modify') {
      this.subscriberService.subscribersForm.enable();
      this.subscriberService.subscribersForm.controls['CreatedDate'].disable();
      this.subscriberService.subscribersForm.controls['ModifiedDate'].disable();
      this.subscriberService.subscribersForm.controls['TypeId'].disable();
      this.subscriberService.subscribersForm.controls['LoyaltyUserId'].disable();
      this.subscriberService.subscribersForm.controls['DueDate'].disable();
      this.subscriberService.subscribersForm.controls['RenewedDate'].disable();
    }


  }

  renewClick() {

  }

  saveRenew() {
    this.subscriberService.subscribersForm.controls['TypeId'].setValue(this.subscriberService.subscribersForm.get('NewTypeId').value, { onlySelf: true });
    this.subscriberService.subscribersForm.controls['LoyaltyUserId'].setValue(this.subscriberService.subscribersForm.get('NewLoyaltyUserId').value, { onlySelf: true });
    this.subscriberService.subscribersForm.controls['DueDate'].setValue(this.subscriberService.subscribersForm.get('NewDueDate').value, { onlySelf: true });
    this.subscriberService.subscribersForm.controls['RenewedDate'].setValue(this.subscriberService.subscribersForm.get('NewRenewedDate').value, { onlySelf: true });

  }

  formatDate(date) {
    const formattedDate = new Date(date);
    console.log(formattedDate);
    console.log(date);
    return formattedDate.toISOString().substring(0, 10);
    //return this.datepipe.transform(formattedDate, 'dd-mm-yyyy');
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
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
