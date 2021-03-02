import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotiftyService {
  constructor(private http: HttpClient) {
    console.log('servicio spotify corriendo');
  }
  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBOxfFeSJTzY2JVx4pF01IzpxyuE_SIP9Hr7PXNLYRGxMk8mWkrT_yxnsWX6Pk1eXrz9f4dzSlDco_JAfo',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
  getArtist(termino:string){
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBAxiWdSuYGqw2GtEZwjma7slXGh0AmhczYSuZBZETIH1x6WyewkWPR7ZM0Uj57ZSMCrfSY7DSuthYoUWVVkBPAHUhPKZVcxHjT7T_7c3JDW7FSTgKg0l82AALXBO2Kyegsh88qs7lXIL_N',
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {
      headers,
    });
  }
}
