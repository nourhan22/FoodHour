import { Component, OnInit,Input } from '@angular/core';
import { ISmallMicro } from 'src/app/shared/models/interfaces/ISmallMicro';

@Component({
  selector: 'app-relatedtopic',
  templateUrl: './relatedtopic.component.html',
  styleUrls: ['./relatedtopic.component.css']
})
export class RelatedtopicComponent implements OnInit {

  @Input() topic: ISmallMicro;
  constructor() { }

  ngOnInit() {
  }

}
