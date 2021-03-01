import { Component } from '@angular/core';
import { SpotiftyService } from '../../services/spotifty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private sp:SpotiftyService) {
    this.sp.getNewReleases();
   }



}
