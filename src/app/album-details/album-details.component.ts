import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../Album';
import { AlbumService } from '../album.service';
import { Photo } from '../Photo';
import { UserService } from '../user.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumId: String;
  albumTitle: String;

  photos: Photo[] = [];

  defaultImageUrl = "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
    
  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
      this.albumTitle = params.get('albumTitle');
            
      this.albumService.getAlbumDetails(this.albumId)
      .subscribe(
        result => this.photos = <Photo[]>result,
        err => console.error('Got an error: ' + err),
        () => console.log('Got a complete notification')
      );
    });
  }

  makeCoverPhoto(coverPhotoUrl){
    console.log("Make cover photo button is clicked!", coverPhotoUrl);

    this.albumService.updateCoverPhoto(this.albumId, coverPhotoUrl)
      .subscribe(
        result => console.error('Change cover photo: ' + result),
        err => console.error('Got an error: ' + err),
        () => console.log('Got a complete notification')
      );
  }

  makeProfilePhoto(profilePhotoUrl){
    console.log("Make profile photo button is clicked!", profilePhotoUrl);

    this.userService.updateProfilePhoto(profilePhotoUrl)
      .subscribe(
        result => console.error('Change profile photo: ' + result),
        err => console.error('Got an error: ' + err),
        () => console.log('Got a complete notification')
      );

  }
}