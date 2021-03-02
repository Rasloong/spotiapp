import { Component } from '@angular/core';
import { SpotiftyService } from '../../services/spotifty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newReleases: any[] = [];
  constructor(private sp: SpotiftyService) {
    this.sp.getNewReleases().subscribe((data: any) => {
      console.log(data.albums.items);
      this.newReleases = data.albums.items;
    });
  }
}
