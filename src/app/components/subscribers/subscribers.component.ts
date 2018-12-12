import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  subscribers: any[];
  dtOptions: any = {};

  constructor(public subscriberService: SubscriberService) { }

  ngOnInit(): void {

    //console.log(this.subscriberService.getSubscribers());
    this.subscribers = this.subscriberService.getSubscribers();
    // this.subscriberService.getSubscribers().subscribe(
    //   subscribers => {
    //     this.subscribers = subscribers;
    //     console.log(this.subscribers);        

    //   });

    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'colvis',
        'copy',
        'print',
        'excel'
      ]
    };
  }

}
