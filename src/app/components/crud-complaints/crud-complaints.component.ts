import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service'
import { Complaint } from '../../models/complaint';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crud-complaints',
  templateUrl: './crud-complaints.component.html',
  styleUrls: ['./crud-complaints.component.css']
})
export class CrudComplaintsComponent implements OnInit {

  action: string;
  status: string[];
  today: Date;

  constructor(
    private complaintService: ComplaintService,
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe
  ) { }

  submitted: boolean;
  formControls = this.complaintService.complaintsForm.controls;

  ngOnInit() {
    this.action = this.route.snapshot.data['action'];
    this.status = ['New','In-Progress','Closed'];


    if (this.action == 'Add') {
      console.log(this.action);
      this.complaintService.complaintsForm.reset();
      this.complaintService.complaintsForm.enable();
      this.complaintService.complaintsForm.controls['CreatedDate'].setValue(this.currentDate(), { onlySelf: true });
      this.complaintService.complaintsForm.controls['ModifiedDate'].setValue(this.currentDate(), { onlySelf: true });
    }
    if (this.action == 'View' || this.action == 'Delete') {
      console.log(this.complaintService.complaintsForm.controls.CreatedDate);
      //this.subscriberService.subscribersForm.controls['CreatedDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('CreatedDate').value), { onlySelf: true });
      //this.subscriberService.subscribersForm.controls['ModifiedDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('ModifiedDate').value), { onlySelf: true });
      //this.subscriberService.subscribersForm.controls['DueDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('DueDate').value), { onlySelf: true });
      //this.subscriberService.subscribersForm.controls['RenewedDate'].setValue(this.formatDate(this.subscriberService.subscribersForm.get('RenewedDate').value), { onlySelf: true });
      this.complaintService.complaintsForm.disable();
    }
    if (this.action == 'Modify') {
      this.complaintService.complaintsForm.enable();
      this.complaintService.complaintsForm.controls['CreatedDate'].disable();
      this.complaintService.complaintsForm.controls['ModifiedDate'].disable();
    }


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

    this.complaintService.deleteComplaint(model);
    this.router.navigate(['/complaints']);

  }

  onSubmit(model: Complaint, isValid: boolean) {
    this.submitted = true;
    if (isValid) {
      if (this.complaintService.complaintsForm.get('InternalId').value == null) {
        //console.log(model, isValid);
        this.complaintService.insertComplaint(model);
        this.router.navigate(['/complaints']);
      }
      else
        if (this.action == 'Modify') {
          this.complaintService.editComplaint(model);
          this.router.navigate(['/complaints']);
        }

      this.submitted = false;
    }

  }

}
