import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GkService } from './gk.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private gkService: GkService) {}

  ngOnInit() {
    //this.isFetching = true;
    //this.gkService.fetchPosts().subscribe(gk => {
      //this.isFetching = false;
      //this.loadedPosts = gk;
    //}, error => {
      //this.isFetching = false;
      //this.error = error.message;
    //});
  }

  onCreatePost(postData: Post) {
    this.gkService.createAndStorePost(postData.title, postData.answer, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.gkService.fetchPosts().subscribe(gk => {
      this.isFetching = false;
      this.loadedPosts = gk;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.gkService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }
}
