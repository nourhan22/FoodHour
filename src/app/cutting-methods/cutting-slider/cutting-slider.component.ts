import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cutting-slider',
  templateUrl: './cutting-slider.component.html',
  styleUrls: ['./cutting-slider.component.css']
})
export class CuttingSliderComponent implements OnInit {

  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      "../../../assets/images/36.jpg",
      "../../../assets/images/35.jpg",
      "../../../assets/images/37a.jpg"
      ];
  }

}
