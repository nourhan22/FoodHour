import { Component, OnInit } from '@angular/core';
import { ICuttingMethods } from 'src/app/shared/models/interfaces/iCuttingMethods';
import { CuttingService } from 'src/app/shared/services/Cutting.service';

@Component({
  selector: 'app-cutting-method-listing',
  templateUrl: './cutting-method-listing.component.html',
  styleUrls: ['./cutting-method-listing.component.css']
})
export class CuttingMethodListingComponent implements OnInit {
  public cut: ICuttingMethods[];
  public title:String;
  constructor(private cuttingServices:CuttingService) { }

  ngOnInit() {
    this.title="Cutting Methods";
    this.cuttingServices.getAll().subscribe(
      (data)=>{
        this.cut=data;
      });
  }
  onCuttingMethodsSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
      this.cut = this.cuttingServices.SearchInCuttingMethods(txtSearch);
    }
    
  }

}
