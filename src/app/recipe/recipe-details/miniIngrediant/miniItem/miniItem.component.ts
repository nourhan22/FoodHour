import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-miniItem',
  templateUrl: './miniItem.component.html',
  styleUrls: ['./miniItem.component.css']
})
export class MiniItemComponent implements OnInit {
@Input() public RecipeItem:any;
  constructor() { }

  ngOnInit() {
  }

}
