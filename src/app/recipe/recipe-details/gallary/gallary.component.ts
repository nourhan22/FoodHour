import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit() {
  }

}
