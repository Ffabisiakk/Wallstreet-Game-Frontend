import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post, PostPage} from '../../dto/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[];
  totalPages: number;
  currentPage: number;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.setPostsFromPage();
  }

  setPostsFromPage(page?: number) {
    this.postService.getPostPage(page)
      .subscribe((data: PostPage) => {
        this.posts = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = page;
      });
  }

}
