import { Component, OnInit,Input } from '@angular/core';
import { IMicroDetail } from 'src/app/shared/models/interfaces/IMicroDetail';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() MicroDetail: IMicroDetail;
  sources: string[];
  currentIndex = 0;
  constructor() {
    this.sources = ['FoodUsualyInvolved', 'Source', 'Prevension'];
   }
   public onTabClicked(i: number) {
    this.currentIndex = i;
   }

  ngOnInit() {
  }

}
