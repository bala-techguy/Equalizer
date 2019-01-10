import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'
import { SubscriptionTypeService } from '../../services/subscription-type.service'
import { SubscriptionType } from '../../models/subscriptionType';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crud-subscription-type',
  templateUrl: './crud-subscription-type.component.html',
  styleUrls: ['./crud-subscription-type.component.css']
})
export class CrudSubscriptionTypeComponent implements OnInit {

  action: string;
  status: string[];
  today: Date;

  constructor(
    private subscriptionTypeService: SubscriptionTypeService,
    public commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  submitted: boolean;
  formControls = this.subscriptionTypeService.subscriptionTypeForm.controls;

  ngOnInit() {

    this.action = this.route.snapshot.data['action'];

    if (this.action == 'Add') {
      console.log(this.action);
      this.subscriptionTypeService.subscriptionTypeForm.reset();
      this.subscriptionTypeService.subscriptionTypeForm.enable();
    }
    if (this.action == 'View' || this.action == 'Delete') {
      
      this.subscriptionTypeService.subscriptionTypeForm.disable();
    }
    if (this.action == 'Modify') {
      this.subscriptionTypeService.subscriptionTypeForm.enable();
    }

  }

  delete(model) {

    this.subscriptionTypeService.deleteSubscriptionType(model);
    this.router.navigate(['/subscription-types']);

  }

  onSubmit(model: SubscriptionType, isValid: boolean) {
    console.log(model, isValid);
    this.submitted = true;
    if (isValid) {
      if (this.subscriptionTypeService.subscriptionTypeForm.get('InternalId').value == null) {
        console.log(model, isValid);
        this.subscriptionTypeService.insertSubscriptionType(model);
        this.router.navigate(['/subscription-types']);
      }
      else
        if (this.action == 'Modify') {
          this.subscriptionTypeService.editSubscriptionType(model);
          this.router.navigate(['/subscription-types']);
        }

      this.submitted = false;
    }

  }

}
