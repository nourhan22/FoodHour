import { UserService } from './../../shared/services/user.service';
import { IUser } from './../../shared/models/interfaces/IUser';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() public item: IUser;
  private id :number;
  constructor(private ActivatedRoute:ActivatedRoute,private userService:UserService) { 
    this.ActivatedRoute.params.subscribe(
      
      (params)=>{this.id = params['id'];}
    )
    this.item = this.userService.GetbyId(this.id);
  }

  ngOnInit() {
  }
  getUrl()
  {
    return "url('../../../assets/images/header.jpg')";
  }
}
