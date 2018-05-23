import { Injectable } from '@angular/core';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { IMicroType } from 'src/app/shared/models/interfaces/IMicroType';


@Injectable({
  providedIn: 'root'
})
export class MicroService {
  private MicroTypes:IMicroType[]=[
    {
      id:1,
      title:'Virus'
    },
    {
      id:2,
      title:'Bacteria'
    },
    {
      id:3,
      title:'Fungi'
    },
    {
      id:4,
      title:'Parasites'
    },
  ];
  
  private allTopics:IMicroItem[];
  private allMicros:IMicroItem[] = [
    {
      id:1,
      name:'AAAAAA',
      type:'Bacteria',
      img:'./assets/images/micro/bacteria4.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved1',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:2,      
      name:'mmmvirus',
      type:'Fungi',
      img:'./assets/images/micro/bacteria2.jpg',
      description:'description description description2',
      FoodUsualyInvolved:'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved2',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:3,
      name:'CCCCCCC',
      type:'Parasites',
      img:'./assets/images/micro/bacteria1.jpg',
      description:'description description description3',
      FoodUsualyInvolved:'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved3',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:4,
      name:'BacteriaName',
      type:'Bacteria',
      img:'./assets/images/micro/bacteria5.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved4',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:5,
      name:'virusName',
      type:'Virus',
      img:'./assets/images/micro/bacteria1.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved5',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:6,
      name:'Fungi',
      type:'Fungi',
      img:'./assets/images/micro/bacteria4.jpg',
      description:'description description description1',
      FoodUsualyInvolved: 'FoodUsualyInvolved FoodUsualyInvolved FoodUsualyInvolved6',
      Source:'Source Source Source',
      Prevention:'Prevention Prevention Prevention',
    },
    {
      id:7,
      name:'bac',
      type:'Virus',
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

GetAllMicros() :Observable<IMicroItem[]>
{
  return of (this.allMicros);
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

  onDelete(id:number)
 {
   debugger;
   const index= this.allMicros.findIndex(a=>a.id === id);
   if(index >-1)
   {
     this.allMicros.splice(index,1);
   }
 }

 DeleteAll()
 {
  let len = this.allMicros.length; 
  this.allMicros.splice(0,len);
 }
 GetMicroTypes()
 {
   return this.MicroTypes;
 }
}
