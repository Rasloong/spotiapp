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
  error:boolean=false;
  mensajeError:string;
  constructor(private sp: SpotiftyService) {
    this.loading = true;
    this.sp.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      delay(500);
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },(ers)=>{
      this.error=true;
      this.loading=false;
      this.mensajeError=ers.error.error.message;
      console.log(ers.error.error.message)});
  }
}
