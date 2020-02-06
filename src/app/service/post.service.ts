import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {endpoint} from '../globals';
import {Observable} from 'rxjs';
import {PostPage} from '../dto/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly rateUrl: string;

  constructor(private http: HttpClient) {
    this.rateUrl = endpoint + 'posts';
  }

  getPostPage(page?: number): Observable<PostPage> {
    const url = page ? `${this.rateUrl}?page=${page}` : this.rateUrl;
    return this.http.get<PostPage>(url);
  }
}
