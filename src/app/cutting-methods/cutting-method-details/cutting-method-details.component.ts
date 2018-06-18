import { Component, OnInit } from '@angular/core';
import { CuttingService } from 'src/app/shared/services/Cutting.service';
import { Input } from '@angular/core';
import { ICuttingMethods } from 'src/app/shared/models/interfaces/iCuttingMethods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cutting-method-details',
  templateUrl: './cutting-method-details.component.html',
  styleUrls: ['./cutting-method-details.component.css']
})
export class CuttingMethodDetailsComponent implements OnInit {
  @Input() public item: ICuttingMethods;
  private id :number;
  constructor(private ActivatedRoute:ActivatedRoute,private cuttingServices:CuttingService) { 
    this.ActivatedRoute.params.subscribe(
      
       (params)=>{this.id = params['id'];}
     )
 
    this.item = this.cuttingServices.getByIndex(this.id);
 
  }
    
  ngOnInit() {
    console.log(this.item)
  }

}
