import {Component, OnInit} from '@angular/core';
import {RateService} from '../rate.service';
import {Observable} from 'rxjs';
import {User} from '../user';
import {Rate} from '../rate';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  private rate: Rate;
  private date: string;

  constructor(private rateService: RateService) { }

  ngOnInit() {
    this.getRecentRates('2020020319');
  }

  getRecentRates(date: string): void {
   this.rateService.getRate(date).subscribe(rate => this.rate = rate);
  }
}
