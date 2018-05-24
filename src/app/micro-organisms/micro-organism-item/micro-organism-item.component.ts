import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ISmallMicro } from 'src/app/shared/models/interfaces/ISmallMicro';
<<<<<<< HEAD
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';
=======
import { MicroService } from 'src/app/shared/services/Micro.service';
>>>>>>> d836acc6d7e933df1a027842886b54a479f028bb


@Component({
  selector: 'app-micro-organism-item',
  templateUrl: './micro-organism-item.component.html',
  styleUrls: ['./micro-organism-item.component.css']
})
export class MicroOrganismItemComponent implements OnInit {
<<<<<<< HEAD
  @Input() public item:IMicroItem;
  constructor() { }
=======
  @Input() public item:ISmallMicro;
  constructor(private microService: MicroService) { }
>>>>>>> d836acc6d7e933df1a027842886b54a479f028bb

  ngOnInit() {
  }
  onDelete(id:number)
    {
       this.microService.onDelete(id);
    }
}
