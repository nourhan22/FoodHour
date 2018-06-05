import { Component, OnInit,Input } from '@angular/core';
import { ISmallMicro } from 'src/app/shared/models/interfaces/ISmallMicro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatedtopic',
  templateUrl: './relatedtopic.component.html',
  styleUrls: ['./relatedtopic.component.css']
})
export class RelatedtopicComponent implements OnInit {

  @Input() topic: ISmallMicro;
  constructor(private router:Router) {}

  ngOnInit() {
  }

  redirectToOther()
  {
   debugger;
    this.router.navigate(['microOrganismListing','details',this.topic.id]).then(()=>{debugger;});
  }

}
