import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {endpoint} from '../globals';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Rate} from '../rates/rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private readonly rateUrl: string;

  constructor(private http: HttpClient) {
    this.rateUrl = endpoint + 'rates';
  }

  getRate(date: string): Observable<Rate> {
    const url = `${this.rateUrl}/${date}`;
    return this.http.get<Rate>(url).pipe(
      catchError(this.handleError<Rate>())
    );
  }

  addRate(rate: Rate): Observable<Rate> {
    return this.http.post<Rate>(this.rateUrl, rate)
      .pipe(
        catchError(this.handleError<Rate>())
      );
  }

  updateRate(rate: Rate): Observable<Rate> {
    return this.http.put<Rate>(this.rateUrl, rate)
      .pipe(
        catchError(this.handleError<Rate>())
      );
  }

  deleteRate(rate: Rate | string): Observable<Rate> {
    const date = typeof rate === 'string' ? rate : rate.date;
    const url = `${this.rateUrl}/${date}`;
    return this.http.delete<Rate>(url)
      .pipe(
        catchError(this.handleError<Rate>())
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
