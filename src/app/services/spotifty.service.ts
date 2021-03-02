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
        'Bearer BQAumF35Lm471qZF6WYk6BHiNGVXoDKH1JDRJeX3X1bJntBivI4-hdWxGwz70BUPzMZBsMbOq1pwZr_6GUg',
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases?country=CO').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
  }
  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }
}
