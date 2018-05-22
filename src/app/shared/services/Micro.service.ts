import { Injectable } from '@angular/core';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';


@Injectable({
  providedIn: 'root'
})
export class MicroService {

  private allMicros:IMicroItem[] = [
    {
      id:1,
      name:'AAAAAA',
      type:'bacteria',
      img:'./assets/images/micro/bacteria4.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved1',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:2,      
      name:'mmmmmm',
      type:'virus',
      img:'./assets/images/micro/bacteria2.jpg',
      description:'description description description2',
      FoodUsualyInvolved:'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved2',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:3,
      name:'CCCCCCC',
      type:'virus',
      img:'./assets/images/micro/bacteria1.jpg',
      description:'description description description3',
      FoodUsualyInvolved:'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved3',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:4,
      name:'BacteriaName',
      type:'bacteria',
      img:'./assets/images/micro/bacteria5.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved4',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    }
  ] ;
constructor() { 
}

GetAllMicros()
{
  return this.allMicros.slice();
}

GetbyId(id : number)
{

  return this.allMicros.find(function(element){
    return element.id == id;
  })
}

GetRelatedTopics(id:number)
{
   let item = this.GetbyId(id);

   return this.allMicros.filter(function(ele){
     return ele.type == item.type && ele.id != item.id;
   })
}

}
