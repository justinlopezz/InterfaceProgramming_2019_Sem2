import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[] = [];

  loading : boolean;

  constructor(private http: HttpClient) { }


  getPosts(){
// loading true
    
    this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data: Post[]) => {
          this.posts = data;
          // loading false
      });
  }

  onClickRefresh(){
    window.location.reload();
  }

}
