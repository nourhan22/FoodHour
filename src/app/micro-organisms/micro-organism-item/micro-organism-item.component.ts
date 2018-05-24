import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ISmallMicro } from 'src/app/shared/models/interfaces/ISmallMicro';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';


@Component({
  selector: 'app-micro-organism-item',
  templateUrl: './micro-organism-item.component.html',
  styleUrls: ['./micro-organism-item.component.css']
})
export class MicroOrganismItemComponent implements OnInit {
  @Input() public item:IMicroItem;
  constructor() { }

  ngOnInit() {
  }

}
