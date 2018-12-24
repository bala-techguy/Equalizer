import { Component, OnInit } from '@angular/core';
import { LoyaltyService } from '../../services/loyalty.service';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {

  constructor(public loyaltyService: LoyaltyService) { }

  loyalty: any[];

  ngOnInit() {

    this.loyalty = this.loyaltyService.getLoyalty();
    this.loyaltyService.loyaltyForm.disable();
    this.loyaltyService.loyaltyForm.setValue(this.loyalty[0]);
    this.loyaltyService.loyaltyForm.controls['LoyaltyUser'].setValue(this.loyalty[0].LoyaltyUser[0].UserName, { onlySelf: true });
  }

}
