import { Component, OnInit } from '@angular/core';
import { ICuttingMethods } from 'src/app/shared/models/interfaces/iCuttingMethods';

@Component({
  selector: 'app-cutting-method-listing',
  templateUrl: './cutting-method-listing.component.html',
  styleUrls: ['./cutting-method-listing.component.css']
})
export class CuttingMethodListingComponent implements OnInit {
  public cut: ICuttingMethods[];
  constructor() { }

  ngOnInit() {
    this.cut =  [
      {imageUrl: '../../../assets/images/large dice.jpg',
      title: 'large dice'},
      {imageUrl:'../../../assets/images/Medium dice.jpg',
      title: 'Medium dice'},
      {imageUrl:'../../../assets/images/Small dice.jpg',
      title: 'Small dice'},
      {imageUrl:'../../../assets/images/Brunoise.jpg',
      title: 'Brunoise'},
      {imageUrl:'../../../assets/images/Fine brunoise.jpg',
      title: 'Fine brunoise'},
      {imageUrl:'../../../assets/images/Batonnet.jpg',
      title: 'Bâtonnet'},
      {imageUrl:'../../../assets/images/Julienne.jpg',
      title: 'Julienne'},
      {imageUrl:'../../../assets/images/Fine julienne.jpg',
      title: 'Fine julienne'},
      {imageUrl:'../../../assets/images/Tourne.jpg',
      title: 'Tourné'}


    ];
  }

}
