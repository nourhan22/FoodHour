import { Component, OnInit } from '@angular/core';
//import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { Input } from '@angular/core';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() RecipeItem:any;
  //public vite;
  constructor() { }

  ngOnInit() {
   // this.vite=this.RecipeItem.nutritions.VITAMINS;
    
  }

}
