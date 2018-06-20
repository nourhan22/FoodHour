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
  public Micros:any[]=[];
  
  constructor(private MicroService:MicroService) {
    // this.MicroService.GetAllMicros().subscribe(
    //   (data)=>{debugger;console.log(data.json());
        
    //     this.MicroService.allMicros = data.json();
    //     this.Micros = this.MicroService.allMicros ;
    //     this.MicroService.lengthOfMicros = this.MicroService.allMicros.length;
    //   });
   }

  ngOnInit() {
   
    this.headertitle = 'MicroOrganisms';
    
      //   this.MicroService.GetAllMicros().subscribe(
      //   (data)=>{ this.Micros = data}
      //  );
      if(this.Micros.length != this.MicroService.allMicros.length && this.Micros.length!=0)
      {
         this.Micros = this.MicroService.allMicros;
      }
else
     { this.MicroService.GetAllMicros().subscribe(
        (data)=>{debugger;console.log(data.json());
          this.Micros = data.json();
          this.MicroService.allMicros = data.json();
          this.MicroService.lengthOfMicros = this.MicroService.allMicros.length;
        });
      }
  }

  onMicroSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
      //this.Micros = this.MicroService.GetAllMicros();
      this.Micros = this.MicroService.SearchInMicros(txtSearch);
    }
    
  }

  onDelete()
   {
     debugger;
     this.MicroService.DeleteAll();
   }

}
