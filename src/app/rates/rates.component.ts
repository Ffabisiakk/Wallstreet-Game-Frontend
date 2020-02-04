import {Component, OnInit} from '@angular/core';
import {RateService} from '../service/rate.service';
import {Rate} from './rate';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  private rate: Rate;
  id: string;
  date: string;
  hour: number;

  constructor(private rateService: RateService) { }

  ngOnInit() {
    this.getRates('2020-02-04 12:00');
    this.date = '2020-02-04';
    this.hour = 12;
    this.setDate();
  }

  getRates(id: string): void {
   this.rateService.getRate(id).subscribe(rate => this.rate = rate);
  }

  setDate() {
    this.id = this.date + ' ' + this.hour + ':00';
    this.getRates(this.id);
  }
}
