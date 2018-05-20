import { Component, OnInit } from '@angular/core';
import { ISmallMicro } from 'src/app/shared/models/interfaces/ISmallMicro';

@Component({
  selector: 'app-micro-organism-listing',
  templateUrl: './micro-organism-listing.component.html',
  styleUrls: ['./micro-organism-listing.component.css']
})
export class MicroOrganismListingComponent implements OnInit {

  public Micros:ISmallMicro[];
  constructor() { }

  ngOnInit() {
    this.Micros = [
      {
        name:'AAAAAA',
        type:'bacteria',
        img:'img/projects/project.jpg'
      },
      {
        name:'BBBBBBBBB',
        type:'virus',
        img:'img/projects/project.jpg'
      },
      {
        name:'CCCCCCC',
        type:'virus',
        img:'img/projects/project.jpg'
      },
    ]
  }

}
