import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  private albumId: String;
  private album: Album;
  
  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
      this.album = this.albumService.getAlbumDetails(this.albumId);
      console.log(this.albumId);
    });
  }
}