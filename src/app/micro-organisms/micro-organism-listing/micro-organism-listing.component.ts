import { Component, OnInit } from '@angular/core';
import { IMicroDetail } from 'src/app/shared/models/interfaces/IMicroDetail';
import { MicroService } from 'src/app/shared/services/Micro.service';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';

@Component({
  selector: 'app-micro-organism-listing',
  templateUrl: './micro-organism-listing.component.html',
  styleUrls: ['./micro-organism-listing.component.css']
})
export class MicroOrganismListingComponent implements OnInit {
  public headertitle:string;
  public Micros:IMicroItem[];
  
  constructor(private MicroService:MicroService) { }

  ngOnInit() {
   
    this.headertitle = 'MicroOrganisms'
    this.Micros = this.MicroService.GetAllMicros();
  }

  onMicroSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
      this.Micros = this.MicroService.GetAllMicros();
      this.Micros = this.MicroService.SearchInMicros(txtSearch);
    }
    
  }

}
