import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[] = [];

  loading : boolean = false;

  constructor(private http: HttpClient) { }

  getPosts(){
// loading true
    this.loading = true;

      this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data: Post[]) => {
        this.posts = data;
        
        this.loading = false;
        
    });
    
}

  onClickRefresh(){
   this.posts = [];
   this.getPosts();
  }

}