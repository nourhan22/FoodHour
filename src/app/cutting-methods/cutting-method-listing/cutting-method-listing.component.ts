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
      {imageUrl: '../../../assets/images/26a.jpg',
      title: 'Bâtonnet'}

    ];
  }

}
