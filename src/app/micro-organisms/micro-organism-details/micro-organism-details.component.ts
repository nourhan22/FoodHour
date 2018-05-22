import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MicroService } from 'src/app/shared/services/Micro.service';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';

@Component({
  selector: 'app-micro-organism-details',
  templateUrl: './micro-organism-details.component.html',
  styleUrls: ['./micro-organism-details.component.css']
})
export class MicroOrganismDetailsComponent implements OnInit {

//public MicroDetail:IMicroItem;
public MicroItem : IMicroItem;
public relatedTopics:IMicroItem[];
private id :number;
  constructor(private ActivatedRoute:ActivatedRoute, private microService:MicroService) {

 
   }

  ngOnInit() {
    
    this.ActivatedRoute.params.subscribe(
     
      (params)=>{ debugger; this.id = params['id'];}
    )

   this.MicroItem = this.microService.GetbyId(this.id);



    this.relatedTopics = this.microService.GetRelatedTopics(this.id);
  
  }

}
