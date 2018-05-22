import { Component, OnInit ,Input} from '@angular/core';
import { IMicroOrganism } from 'src/app/shared/models/interfaces/IMicroOrganism';

@Component({
  selector: 'app-micro-item-description',
  templateUrl: './micro-item-description.component.html',
  styleUrls: ['./micro-item-description.component.css']
})
export class MicroItemDescriptionComponent implements OnInit {

  constructor() { }
  @Input() public Micro: IMicroOrganism;
  ngOnInit() {
  }

}
