import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
@Input() public item:any;
  constructor() { }

  ngOnInit() {
  }

}
