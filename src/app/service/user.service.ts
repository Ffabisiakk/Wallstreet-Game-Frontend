import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {endpoint} from '../globals';
import {Observable, of} from 'rxjs';
import {User} from '../user';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = endpoint + 'users';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        catchError(this.handleError<User[]>([]))
      );
  }

  getUser(nickname: string): Observable<User> {
    const url = `${this.usersUrl}/${nickname}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>())
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user)
      .pipe(
        catchError(this.handleError<User>())
      );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl, user)
      .pipe(
        catchError(this.handleError<User>())
      );
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.nickname;
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url)
      .pipe(
        catchError(this.handleError<User>())
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
