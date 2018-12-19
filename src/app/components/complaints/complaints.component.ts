import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  complaints: any[];
  dtOptions: any = {};

  constructor(public complaintService: ComplaintService) { }

  ngOnInit() {

    this.complaints = this.complaintService.getComplaints();

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
