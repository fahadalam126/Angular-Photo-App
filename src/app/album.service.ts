import { Injectable } from '@angular/core';
import { Album } from './Album';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  constructor(private http: HttpClient) { }

  private albums: Album[] = [{
    id: "1",
    title: "Album 1",
    coverPhotoUrl: "https://www.w3.org/MarkUp/Test/xhtml-print/20050519/tests/jpeg420exif.jpg",
    creationDate: "",
    createdBy: "",   
  },
  {
    id: "2",
    title: "Album 2",
    coverPhotoUrl: "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover_medium.jpg",  
    creationDate: "",
    createdBy: "",   
  },
  {
    id: "3",
    title: "Album 3",
    coverPhotoUrl: "https://images.earthtouchnews.com/media/1951732/bigpicture_black-grouse_2019-05-02.jpg",
    creationDate: "",
    createdBy: "",   
  },
  ];

  public getAllAlbums(){

    var idToken = localStorage.getItem('idToken');
    console.log("Id token inside Album Service", idToken);

    const headers = {
      'idToken': idToken
    };

    return this.http.get("http://ec2-54-218-206-93.us-west-2.compute.amazonaws.com:7000/api/albums", {headers});
    
  }

  public getAlbumDetails(id){
    return this.albums [id-1];
  }
}
