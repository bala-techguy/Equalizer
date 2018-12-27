import { Component, OnInit } from '@angular/core';
import { AuditTrailService } from '../../services/audit-trail.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {

  auditTrail: any[];

  constructor(public auditTrailService: AuditTrailService) { }

  ngOnInit() {

    this.auditTrail = this.auditTrailService.getAuditTrail();
    this.auditTrailService.auditTrailForm.disable();
    this.auditTrailService.auditTrailForm.setValue(this.auditTrail[0]);
    this.auditTrailService.auditTrailForm.controls['UserNameWhoUpdated'].setValue(this.auditTrail[0].UserNameWhoUpdated[0].UserName, { onlySelf: true });
  }
}
