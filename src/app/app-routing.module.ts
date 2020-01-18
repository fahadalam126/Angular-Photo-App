import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent} from './album-details/album-details.component';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';
import { CreateAlbumComponent } from './create-album/create-album.component';


const routes: Routes = [
    { path: 'albums', component: AlbumsComponent },
    { path: 'album/:albumId/:albumTitle', component: AlbumDetailsComponent },
    { path: 'upload-photo/:albumId/:albumTitle', component: UploadPhotosComponent },
    { path: 'albums/create', component: CreateAlbumComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 