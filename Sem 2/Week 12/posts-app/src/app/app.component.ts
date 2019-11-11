import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'posts-app';

  constructor(public postsService: PostsService, public usersService: UsersService){}

  ngOnInit(){
    this.postsService.getPosts();
    this.usersService.getUsers();
  }

  onRefresh(){
    this.postsService.onClickRefresh();
    this.usersService.onClickRefresh();
  }

  
}
