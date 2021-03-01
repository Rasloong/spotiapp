import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotiftyService {

  constructor(private http:HttpClient) {
    console.log('servicio spotify corriendo');
  }
  getNewReleases(){
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQDkgmBs094ENyds7KsdiCv9R6pn8FSJumFx9GVD9o8b9qXPqOb1-ZSB5fx1qvzn3hKmo4bH53BZIO1Xz-k'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    .subscribe(data=>{console.log(data);});
  }
}
