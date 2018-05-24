import { Injectable } from '@angular/core';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';


@Injectable({
  providedIn: 'root'
})
export class MicroService {
  private allTopics:IMicroItem[];
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
      name:'mmmvirus',
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
    },
    {
      id:5,
      name:'virusName',
      type:'virus',
      img:'./assets/images/micro/bacteria1.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved5',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:6,
      name:'bacteriaaaaa',
      type:'bacteria',
      img:'./assets/images/micro/bacteria4.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved6',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:7,
      name:'bac',
      type:'bacteria',
      img:'./assets/images/micro/bacteria4.jpg',
      description:'description description description7',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved6',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    }
  ] ;

 public lengthOfMicros : number = this.allMicros.length;
 
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

GetRelatedTopics(id:number,no)
{
   let item = this.GetbyId(id);
   
   this.allTopics =  this.allMicros.filter(function(ele){
     return ele.type == item.type && ele.id != item.id;
   })

   return this.allTopics.slice(0,no);
}

 SearchInMicros(txtSearch:string)
 {
    let filteredArr = this.allMicros.filter(function(ele){
      return ele.type.toLowerCase().includes(txtSearch.toLowerCase()) || 
         ele.name.toLowerCase().includes(txtSearch.toLowerCase());
    })

    return filteredArr;
 }

 SearchInTopics(txtSearch:string,no)
 {
   let newArr;
   if(txtSearch!=null)
   {
    newArr = this.allTopics.filter(function(ele){
      return ele.name.toLowerCase().includes(txtSearch.toLowerCase());
    });

    return newArr.slice(0,no);
   }
 }

 AddNewMicro(item:IMicroItem)
 {
   debugger;
 this.allMicros.push(item);
 }
}
