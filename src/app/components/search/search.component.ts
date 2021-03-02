import { Component, OnInit } from '@angular/core';
import { SpotiftyService } from '../../services/spotifty.service';
import { ArtistComponent } from '../artist/artist.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  constructor(private sp: SpotiftyService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    console.log(termino);
    this.sp.getArtist(termino).subscribe((data: any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
  }
}
