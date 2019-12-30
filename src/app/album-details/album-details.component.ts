import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../Album';
import { AlbumService } from '../album.service';
import { Photo } from '../Photo';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  private albumId: String;
  public photos: Photo[] = [];

  public defaultImageUrl = "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
  
  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
            
      this.albumService.getAlbumDetails(this.albumId)
      .subscribe(
        result => this.photos = <Photo[]>result,
        err => console.error('Got an error: ' + err),
        () => console.log('Got a complete notification')
      );
    });
  }
}