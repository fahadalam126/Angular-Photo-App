import { Injectable } from '@angular/core';
import { Album } from './Album';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  apiBaseUrl = "http://ec2-54-218-206-93.us-west-2.compute.amazonaws.com:7000/api";

  idToken = localStorage.getItem('idToken');
  
  constructor(private http: HttpClient) { }

  public getAllAlbums(){

    console.log("Id token inside Album Service", this.idToken);
    var headers = this.getHeaders();
    return this.http.get(this.apiBaseUrl + "/albums", {headers});
  }
  public getHeaders(){
    var headers = {
      'idToken': this.idToken
    };
    return headers; 
  }
  public getAlbumDetails(id){

    var headers = this.getHeaders();
    return this.http.get(this.apiBaseUrl + "/albums/"+id+"/photos", {headers});

    //console.log("Response for photos:", response);
    //return this.albums [id-1];

  }
}
