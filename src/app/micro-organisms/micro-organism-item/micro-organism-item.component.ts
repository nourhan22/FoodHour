import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ISmallMicro } from 'src/app/shared/models/interfaces/ISmallMicro';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';
import { MicroService } from 'src/app/shared/services/Micro.service';


@Component({
  selector: 'app-micro-organism-item',
  templateUrl: './micro-organism-item.component.html',
  styleUrls: ['./micro-organism-item.component.css']
})
export class MicroOrganismItemComponent implements OnInit {

  @Input() public item:IMicroItem;
  //@Input() public item:ISmallMicro;
  constructor(private microService: MicroService) { }
  ngOnInit() {
  }
  onDelete(id:number)
    {
       this.microService.onDelete(id);
    }
   
}
