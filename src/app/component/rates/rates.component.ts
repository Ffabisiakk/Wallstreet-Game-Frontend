import {Component, OnInit} from '@angular/core';
import {RateService} from '../../service/rate.service';
import {Rate} from '../../dto/rate';

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

  constructor(private rateService: RateService) {
    this.date = '2020-02-11';
    this.hour = 17;
  }

  ngOnInit() {

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
