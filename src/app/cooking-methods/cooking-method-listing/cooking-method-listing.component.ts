import { Component, OnInit } from '@angular/core';
import { IcookingMethod } from 'src/app/shared/models/interfaces/icooking-method';

@Component({
  selector: 'app-cooking-method-listing',
  templateUrl: './cooking-method-listing.component.html',
  styleUrls: ['./cooking-method-listing.component.css']
})
export class CookingMethodListingComponent implements OnInit {
public IcookingMethod: IcookingMethod[];
  constructor() { }
  headerTitle:string;
  ngOnInit() {
    this.headerTitle='cooking method';
    this.IcookingMethod = [
      {
      title: 'hhhh',
      imageUrl: '../../../assets/images/cooking method/grill.jpg',
       description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
       id:1
    }      
  ,
  {
    title: 'hhhh',
    imageUrl: '../../../assets/images/cooking method/grill.jpg',
    description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
    id:2
  },

    {  title:'Grill',
      imageUrl:'../../../assets/images/cooking method/grill.jpg',
      description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
      id:3
    }
  ,
  {
    title:'Steam',
    imageUrl:'../../../assets/images/cooking method/steam.jpg',
    description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
    id:4
  }
  ,
  {
    title:'Simmer',
    imageUrl:'../../../assets/images/cooking method/simmer.jpg',
    description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
    id:5
  }
  ,
  {
    title:'Sear',
    imageUrl:'../../../assets/images/cooking method/sear.jpg',
    description:'Tournée (pronounced tour-nay) is French for the word "turned." The term refers to a method of cutting and peeling root vegetables into oblong, seven-sided football-like shapes.',
    id:6
  }
];

  }

}
