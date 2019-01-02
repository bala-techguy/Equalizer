import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'
import { LoyaltyUserService } from '../../services/loyalty-user.service'
import { Complaint } from '../../models/complaint';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crud-loyalty-user',
  templateUrl: './crud-loyalty-user.component.html',
  styleUrls: ['./crud-loyalty-user.component.css']
})
export class CrudLoyaltyUserComponent implements OnInit {

  action: string;
  status: string[];
  today: Date;

  constructor(
    private loyaltyUserService: LoyaltyUserService,
    public commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  submitted: boolean;
  formControls = this.loyaltyUserService.loyaltyUsersForm.controls;

  ngOnInit() {
    this.action = this.route.snapshot.data['action'];

    if (this.action == 'Add') {
      console.log(this.action);
      this.loyaltyUserService.loyaltyUsersForm.reset();
      this.loyaltyUserService.loyaltyUsersForm.enable();
      this.loyaltyUserService.loyaltyUsersForm.controls['CreatedDate'].disable();
      this.loyaltyUserService.loyaltyUsersForm.controls['ModifiedDate'].disable();
      this.loyaltyUserService.loyaltyUsersForm.controls['CreatedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
      this.loyaltyUserService.loyaltyUsersForm.controls['ModifiedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
    }
    if (this.action == 'View' || this.action == 'Delete') {
      
      this.loyaltyUserService.loyaltyUsersForm.disable();
      this.loyaltyUserService.loyaltyUsersForm.controls['LoyaltyUserId'].setValue(this.loyaltyUserService.loyaltyUsersForm.get('LoyaltyUserId').value[0].UserName, { onlySelf: true });
    }
    if (this.action == 'Modify') {
      this.loyaltyUserService.loyaltyUsersForm.enable();
      this.loyaltyUserService.loyaltyUsersForm.controls['LoyaltyUserId'].setValue(this.loyaltyUserService.loyaltyUsersForm.get('LoyaltyUserId').value[0].UserName, { onlySelf: true });
      this.loyaltyUserService.loyaltyUsersForm.controls['CreatedDate'].disable();
      this.loyaltyUserService.loyaltyUsersForm.controls['ModifiedDate'].disable();
    }

  }

  delete(model) {

    this.loyaltyUserService.deleteLoyaltyUsers(model);
    this.router.navigate(['/loyalty-users']);

  }

  onSubmit(model: Complaint, isValid: boolean) {
    console.log(model, isValid);
    this.submitted = true;
    if (isValid) {
      if (this.loyaltyUserService.loyaltyUsersForm.get('InternalId').value == null) {
        console.log(model, isValid);
        this.loyaltyUserService.insertLoyaltyUsers(model);
        this.router.navigate(['/loyalty-users']);
      }
      else
        if (this.action == 'Modify') {
          this.loyaltyUserService.editLoyaltyUsers(model);
          this.router.navigate(['/loyalty-users']);
        }

      this.submitted = false;
    }

  }

}
