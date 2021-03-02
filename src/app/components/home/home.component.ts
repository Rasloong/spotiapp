import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { SpotiftyService } from '../../services/spotifty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;
  constructor(private sp: SpotiftyService) {
    this.loading = true;
    this.sp.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      delay(1000);
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }
}
