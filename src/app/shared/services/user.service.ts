import { IUser } from './../models/interfaces/IUser';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'nayera saad',
      img: '../../assets/images/user6.jpg'
    },
    {
      id: 2,
      name: 'reem ahmed',
      img: '../../assets/images/user5.jpg'
    },
    {
      id: 3,
      name: 'sara rashid',
      img: '../../assets/images/user7.jpg'
    },
    {
      id: 4,
      name: 'soso soso',
      img: '../../assets/images/user4.jpg'
    }
  ]

  constructor() { }
  GetAllUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  GetbyId(id: number) {

    return this.users.find(function (element) {
      return element.id == id;
    })
  }
  public DeleteItem(id: Number) {
    const index = this.users.findIndex(a => a.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  DeleteAll() {
    let len = this.users.length;
    this.users.splice(0, len);
  }
  SearchInUsers(txtSearch: string) {
    let filteredArr = this.users.filter(function (ele) {
      return ele.name.toLowerCase().includes(txtSearch.toLowerCase());
    })
    return filteredArr;
  }
}
