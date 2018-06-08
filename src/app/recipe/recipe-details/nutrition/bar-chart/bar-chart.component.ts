import { Component, OnInit } from '@angular/core';
//import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() RecipeItem:any;
  constructor() { }

  ngOnInit() {
  }

}
