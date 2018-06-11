import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';
@Component({
  selector: 'app-mainInfo',
  templateUrl: './mainInfo.component.html',
  styleUrls: ['./mainInfo.component.css']
})
export class MainInfoComponent implements OnInit {
  @Input() item:IRecipe;
  constructor() { }

  ngOnInit() {
  }

}
