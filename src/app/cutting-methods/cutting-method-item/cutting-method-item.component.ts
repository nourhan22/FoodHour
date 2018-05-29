import { Component, OnInit, Input } from '@angular/core';
import { ICuttingMethods } from 'src/app/shared/models/interfaces/iCuttingMethods';
import { CuttingService } from 'src/app/shared/services/Cutting.service';

@Component({
  selector: 'app-cutting-method-item',
  templateUrl: './cutting-method-item.component.html',
  styleUrls: ['./cutting-method-item.component.css']
})
export class CuttingMethodItemComponent implements OnInit {
  @Input()  public item: ICuttingMethods;
  constructor(private cuttingServices:CuttingService) { }

  ngOnInit() {
  }
  onDelete(id:number){
    
      this.cuttingServices.onDelete(id);
  }

}
