import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public myName ="";

  public albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
  ){
  }
  
  ngOnInit() {
    this.myName = "Fahad"
    //this.albums = this.albumService.getAllAlbums();

    this.albumService.getAllAlbums()
    .subscribe(
      result => this.albums = <Album[]>result,
      err => console.error('Got an error: ' + err),
      () => console.log('Got a complete notification')
    );
  
  }
}
