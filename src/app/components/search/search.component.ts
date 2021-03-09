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
  loading: boolean;
  constructor(private sp: SpotiftyService) {
    this.loading = true;
  }

  ngOnInit(): void {}

  buscar(termino: string) {
    this.loading = true;
    this.sp.getArtists(termino).subscribe((data: any) => {
      this.artists = data;
    });
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
