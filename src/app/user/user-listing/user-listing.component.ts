import { UserService } from './../../shared/services/user.service';
import { IUser } from './../../shared/models/interfaces/IUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  public headertitle:string;
  public users:IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.headertitle = 'Users'
    this.userService.GetAllUsers().subscribe(
      (data)=>{ this.users = data}
     );
  }
  onUserSearch(txtSearch:string)
  {
    if( txtSearch!=null)
    {
      this.users = this.userService.SearchInUsers(txtSearch);
    }
    
  }
  onDelete()
  {
    
    this.userService.DeleteAll();
  }
}
