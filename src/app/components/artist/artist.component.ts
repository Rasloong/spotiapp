import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiftyService } from '../../services/spotifty.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {
  artist:any={};
  loading: boolean;
  constructor(private router:ActivatedRoute,
    private sp:SpotiftyService) {
    this.router.params.subscribe(params=>{
      console.log(params);
      this.getArtist(params['id']);
    })
  }

  ngOnInit(): void {}

  getArtist(id:string){
    this.loading = true;
    this.sp.getArtist(id)
    .subscribe(art=>{this.artist=art;});
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
