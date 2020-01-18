import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

/* File Uploader */
import { AngularFileUploaderModule } from "angular-file-uploader";

/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

/* Auth service */
import { AuthenticationService } from './shared/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    UploadPhotosComponent,
    CreateAlbumComponent,
    PhotoDetailsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
