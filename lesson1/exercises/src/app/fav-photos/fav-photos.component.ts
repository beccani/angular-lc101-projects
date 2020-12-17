import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Awesome Pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://mixkit.imgix.net/art/preview/mixkit-two-flamingos-standing-in-the-water-438-square-large.png';
  image3 = 'https://mixkit.imgix.net/art/preview/mixkit-starry-night-sky-over-hills-and-water-85-square-large.png';

  constructor() { }

  ngOnInit() {
  }

}