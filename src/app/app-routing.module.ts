import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent} from './album-details/album-details.component';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';

const routes: Routes = [
    { path: 'albums', component: AlbumsComponent },
    { path: 'album/:albumId', component: AlbumDetailsComponent },
    { path: 'album/upload/:albumId', component: UploadPhotosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 