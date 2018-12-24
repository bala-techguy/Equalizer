import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'
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
    public commonService: CommonService,
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
      this.complaintService.complaintsForm.controls['ComplaintId'].disable();
      this.complaintService.complaintsForm.controls['CreatedDate'].disable();
      this.complaintService.complaintsForm.controls['ModifiedDate'].disable();
      this.complaintService.complaintsForm.controls['ComplaintId'].setValue(this.commonService.randomNumber(), { onlySelf: true });
      this.complaintService.complaintsForm.controls['Status'].setValue('New', { onlySelf: true });
      this.complaintService.complaintsForm.controls['CreatedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
      this.complaintService.complaintsForm.controls['ModifiedDate'].setValue(this.commonService.currentDate(), { onlySelf: true });
    }
    if (this.action == 'View' || this.action == 'Delete') {
      
      this.complaintService.complaintsForm.disable();
    }
    if (this.action == 'Modify') {
      this.complaintService.complaintsForm.enable();
      this.complaintService.complaintsForm.controls['CreatedDate'].disable();
      this.complaintService.complaintsForm.controls['ModifiedDate'].disable();
    }


  }

  delete(model) {

    this.complaintService.deleteComplaint(model);
    this.router.navigate(['/complaints']);

  }

  onSubmit(model: Complaint, isValid: boolean) {
    console.log(model, isValid);
    this.submitted = true;
    if (isValid) {
      if (this.complaintService.complaintsForm.get('InternalId').value == null) {
        console.log(model, isValid);
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
