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
        'Bearer BQA4U-rqjpa3pExNm847hioHQCXWxJB6POMz6jOuJc6yirqnclOg_ZOf3tf7GzUaIueg9PZiZvnZr5znGRg',
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
}
