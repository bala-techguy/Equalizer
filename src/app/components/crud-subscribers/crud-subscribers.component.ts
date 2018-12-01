import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-subscribers',
  templateUrl: './crud-subscribers.component.html',
  styleUrls: ['./crud-subscribers.component.css']
})
export class CrudSubscribersComponent implements OnInit {

  action: string;

  constructor(private subscriberService: SubscriberService,private route: ActivatedRoute) { }
  submitted: boolean;
  formControls = this.subscriberService.subscribersForm.controls;

  ngOnInit() {
    this.action = this.route.snapshot.data['action'];
    console.log(this.action);
  }

  onSubmit() {
    this.submitted = true;
    if (this.subscriberService.subscribersForm.valid) {
      //if (this.subscriberService.subscribersForm.get('').value == null)
      //insert
      this.submitted = false;
    }

  }

}
