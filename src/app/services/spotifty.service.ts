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

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCsvGuMSX69k2z8VjaOas3fxOzbE-Gw4Mb8J42niTMskn5AgkgCHpe5GS3fKjeC3J83w4SFJuVcgyhR3Qw'
    });
    return this.http.get(url,{headers});
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO')
    .pipe(map((data) => {
        return data['albums'].items;
      })
    );
  }
  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map((data) => {
        return data['artists'].items;
      })
    );
  }
}
