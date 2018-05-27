import { Component, OnInit,Output,Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-smallHeader',
  templateUrl: './smallHeader.component.html',
  styleUrls: ['./smallHeader.component.css']
})
export class SmallHeaderComponent implements OnInit {
@Input() public title;
 
@Output() MicroSearch: EventEmitter<any> = new EventEmitter();
@Output() CookingMethodSearch: EventEmitter<any> = new EventEmitter();
@Output() CuttingMethodSearch: EventEmitter<any> = new EventEmitter();
public txtSearch : string;

  constructor(private ActivatedRoute : ActivatedRoute) { }

  ngOnInit() {
  }
  onChange()
  {
    let segmentUrl ;
    this.ActivatedRoute.url.subscribe(
      (data)=>{
        segmentUrl = data[0].path; 
    
        if(segmentUrl == 'microOrganismListing')
        {
          this.MicroSearch.emit(this.txtSearch);
        }
        else if (segmentUrl == 'cookingMethodListing')
        {
          this.CookingMethodSearch.emit(this.txtSearch);
        }
        else if (segmentUrl == 'cuttingMethodListing')
        {
          this.CuttingMethodSearch.emit(this.txtSearch);
        }
      });
  }
}
