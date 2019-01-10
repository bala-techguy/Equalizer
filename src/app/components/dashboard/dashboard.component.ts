import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subscribers: any[];
  dashboardTiles: any[];

  constructor(public subscriberService: SubscriberService, public dashboardService: DashboardService ) { }

  ngOnInit() {

    this.subscribers = this.subscriberService.getSubscribers();
    this.dashboardTiles = this.dashboardService.getDashboardTiles();
    console.log(this.dashboardTiles);

  }

}
