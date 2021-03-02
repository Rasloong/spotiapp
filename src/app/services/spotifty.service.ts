import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotiftyService {
  constructor(private http: HttpClient) {
    console.log('servicio spotify corriendo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCs3IxyTP1k2lo66iLOTiCwjChvQsUAgM4xappO1W04xcWkp3J-dSsbXhXFMLy5l2eIFSLcnC1T4IboovE',
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?country=CO', {
        headers,
      })
      .pipe(
        map((data) => {
          return data['albums'].items;
        })
      );
  }
  getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCs3IxyTP1k2lo66iLOTiCwjChvQsUAgM4xappO1W04xcWkp3J-dSsbXhXFMLy5l2eIFSLcnC1T4IboovE',
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist`,
      {
        headers,
      }
    ).pipe(map((data)=>{return data['artists'].items}));
  }
}
