import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'posts-app';

  constructor(public postsService: PostsService){}

  ngOnInit(){
    this.postsService.getPosts();
  }

  onRefresh(){
    this.postsService.onClickRefresh();
  }
}
