import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums : Album[] = [];

  constructor(private http: HttpClient) { }

  fetchAlbums(){
    this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
      .subscribe((data: Album[]) => {
          this.albums = data;
      });
  }


}
