import { UserService } from './../../shared/services/user.service';
import { IUser } from './../../shared/models/interfaces/IUser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() public item: IUser;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  onDelete(id: number) {

    this.userService.DeleteItem(id);
  }

}
