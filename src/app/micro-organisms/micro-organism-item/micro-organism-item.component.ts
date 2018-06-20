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

  @Input() public item:any;
  //@Input() public item:ISmallMicro;
  constructor(private microService: MicroService) { }
  ngOnInit() {
  }
  onDelete(id:number)
    {
      debugger;
      let microId = this.item.MicroId;
      this.microService.onDelete(microId);
      const index= this.microService.allMicros.findIndex(a=>a.MicroId === id);
      if(index >-1)
      {
        this.microService.allMicros.splice(index,1);
      }
}
}
