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
        'Bearer BQAta0VCAcR_KTUrsv53OLp5H__4zDP8ArMtUO95dbPZVTlqz75WU1iW_yXZnRelbJX9mWAyoJC1Is9XSLo',
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
  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=CO`).pipe(
      map((data) => {
        return data['tracks'];
      }));
  }
}
