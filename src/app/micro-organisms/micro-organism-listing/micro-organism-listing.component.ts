import { Component, OnInit } from '@angular/core';
import { ISmallMicro } from 'src/app/shared/models/interfaces/ISmallMicro';

@Component({
  selector: 'app-micro-organism-listing',
  templateUrl: './micro-organism-listing.component.html',
  styleUrls: ['./micro-organism-listing.component.css']
})
export class MicroOrganismListingComponent implements OnInit {
  public headertitle:string;
  public Micros:ISmallMicro[];
  constructor() { }

  ngOnInit() {
    this.headertitle = 'MicroOrganisms'
    this.Micros = [
      {
        name:'AAAAAA',
        type:'bacteria',
        img:'./assets/images/26a.jpg'
      },
      {
        name:'BBBBBBBBB',
        type:'virus',
        img:'./assets/images/26a.jpg'
      },
      {
        name:'CCCCCCC',
        type:'virus',
        img:'./assets/images/26a.jpg'
      },
    ]
  }

}
