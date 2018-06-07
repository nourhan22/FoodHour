import { Component, OnInit } from '@angular/core';
import { ISmallTool } from 'src/app/shared/models/interfaces/ISmallTool';
import { ToolService } from '../../shared/services/tool.service';
@Component({
  selector: 'app-tool-listing',
  templateUrl: './tool-listing.component.html',
  styleUrls: ['./tool-listing.component.css']
})
export class ToolListingComponent implements OnInit {

  public Tools:ISmallTool[];
  constructor(private toolservice:ToolService) {}
headerTitle:string;
  ngOnInit() {
    this.headerTitle='Tools';

    this.toolservice.getAll().subscribe(
      (data)=>{
        
        this.Tools= data;
      }
    );
  }

  onToolsSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
      this.Tools = this.toolservice.SearchInCookingMethods(txtSearch);
    }
    
  }
  onDelete()
   {
     debugger;
     this.toolservice.DeleteAll();
   }

}
