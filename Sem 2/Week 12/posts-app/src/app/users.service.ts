import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Users[] = [];

  loading: boolean = false;

  constructor(private http: HttpClient) { }

  getUsers(){
    this.loading = true;

    this.http.get<Users[]>("https://jsonplaceholder.typicode.com/users")
    .subscribe((data: Users[]) => {
      this.users = data;
      
      this.loading = false;
      
  });
  }

  onClickRefresh(){
    this.users = [];
    this.getUsers();
   }

}
