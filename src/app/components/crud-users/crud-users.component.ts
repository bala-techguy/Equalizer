import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { CommonService } from '../../services/common.service'
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.css']
})
export class CrudUsersComponent implements OnInit {

  action: string;
  roles: string[];
  today: Date;

  constructor(
    private userService: UserService,
    public commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  submitted: boolean;
  formControls = this.userService.usersForm.controls;

  ngOnInit() {
    this.action = this.route.snapshot.data['action'];
    this.roles = ['User','Super User','Admin'];

    if (this.action == 'Add') {
      console.log(this.action);
      this.userService.usersForm.reset();
      this.userService.usersForm.enable();
      this.userService.usersForm.controls['CreatedDate'].disable();
      this.userService.usersForm.controls['ModifiedDate'].disable();
      this.userService.usersForm.controls['RoleId'].setValue('User', { onlySelf: true });
      this.userService.usersForm.controls['CreatedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
      this.userService.usersForm.controls['ModifiedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
    }
    if (this.action == 'View' || this.action == 'Delete') {
      
      this.userService.usersForm.disable();
    }
    if (this.action == 'Modify') {
      this.userService.usersForm.enable();
      this.userService.usersForm.controls['CreatedDate'].disable();
      this.userService.usersForm.controls['ModifiedDate'].disable();
    }


  }

  delete(model) {

    this.userService.deleteUser(model);
    this.router.navigate(['/users']);

  }

  onSubmit(model: User, isValid: boolean) {
    console.log(model, isValid);
    this.submitted = true;
    if (isValid) {
      if (this.userService.usersForm.get('InternalId').value == null) {
        console.log(model, isValid);
        this.userService.insertUser(model);
        this.router.navigate(['/users']);
      }
      else
        if (this.action == 'Modify') {
          this.userService.editUser(model);
          this.router.navigate(['/users']);
        }

      this.submitted = false;
    }

  }

}
