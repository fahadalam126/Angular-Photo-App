import { Injectable } from '@angular/core';
import { Album } from './Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  private albums: Album[] = [{
    id: "1",
    name: "Album 1",
    coverPhotoUrl: "https://www.w3.org/MarkUp/Test/xhtml-print/20050519/tests/jpeg420exif.jpg",   
  },
  {
    id: "2",
    name: "Album 2",
    coverPhotoUrl: "https://assets.fireside.fm/file/fireside-images/podcasts/images/b/bc7f1faf-8aad-4135-bb12-83a8af679756/cover_medium.jpg",  
  },
  {
    id: "3",
    name: "Album 3",
    coverPhotoUrl: "https://images.earthtouchnews.com/media/1951732/bigpicture_black-grouse_2019-05-02.jpg",
  },
];

public getAllAlbums(){
  return this.albums;
}

public getAlbumDetails(id){
  return this.albums [id-1];
}
}
