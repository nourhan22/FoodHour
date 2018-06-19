import { IRecipe } from 'src/app/shared/models/interfaces/IRecipe';
import { IUser } from './../models/interfaces/IUser';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  private users: IUser[] = [
    {
      id: 1,
      name: 'nayera saad',
      img: '../../assets/images/user6.jpg',
      Email: 'nayerasaad@yahoo.com',
      passWord: 'hello123',
      age:25
     
    },
    {
      id: 2,
      name: 'reem ahmed',
      img: '../../assets/images/user5.jpg',
      Email: 'nayerasaad@yahoo.com',
      passWord: 'hello123',
      age:23
    },
    {
      id: 3,
      name: 'sara rashid',
      img: '../../assets/images/user7.jpg',
      Email: 'nayerasaad@yahoo.com',
      passWord: 'hello123',
      age:26
    },
    {
      id: 4,
      name: 'soso soso',
      img: '../../assets/images/user4.jpg',
      Email: 'nayerasaad@yahoo.com',
      passWord: 'hello123',
      age:21
    }
  ]
  public lengthOfUsers: number = this.users.length;
  public favouriteItems: IRecipe[];
  constructor() { 
    this.favouriteItems = [];
  }
  GetAllUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  GetbyId(id: number) {

    return this.users.find(function (element) {
      return element.id == id;
    })
  }
  
  public DeleteItem(id:number) {
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
  AddNewUser(item:IUser){
    this.users.push(item);
  }
  
  Edit(item: IUser){
    const index= this.users.findIndex(a=>a.id===item.id);
     if(index >-1){
         this.users[index]=item;
         return item;
     }
   }
}
