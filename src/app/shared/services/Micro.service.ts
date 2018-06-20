import { Injectable } from '@angular/core';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';
import { IMicroType } from 'src/app/shared/models/interfaces/IMicroType ';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class MicroService {

  public allMicros:any[] = [];  
  public lengthOfMicros : number;  
  private allTopics:IMicroItem[];
  private MicroTypes:any[]=  [{
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

  
constructor(private http :Http) { 
 

}

GetAllMicros():Observable<any>
{
  debugger;
  this.http.get("http://localhost:38630/api/MicroOrganismInfoes").subscribe(
    (data)=>{
      this.allMicros = data.json();
    }
  )
 return  this.http.get("http://localhost:38630/api/MicroOrganismInfoes")
  
}
GetbyId(id : number)
{
debugger;
  return this.allMicros.find(function(element){
    debugger;
    return element.$id == id;
  })
}

GetRelatedTopics(id:number,no)
{
   let item = this.GetbyId(id);
   
   this.allTopics =  this.allMicros.filter(function(ele){
     return ele.Type == item.Type && ele.$id != item.$id;
   })

   return this.allTopics.slice(0,no);
}

 SearchInMicros(txtSearch:string)
 {

    let filteredArr = this.allMicros.filter(function(ele){
      return ele.Type.toLowerCase().includes(txtSearch.toLowerCase()) || 
         ele.Name.toLowerCase().includes(txtSearch.toLowerCase());
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
   this.http.post("http://localhost:38630/api/MicroOrganismInfoes",item).subscribe(
     (data)=>{console.log(data)}
   );
   this.allMicros.push(item);
 }



 onDelete(id:number)
 {
   let url = "http://localhost:38630/api/MicroOrganismInfoes";
   url = `${url}/${id}`;

  this.http.delete(url).subscribe(
   (res)=>{
   console.log(res);

   
   },

   (error)=>{console.log("error happened");}
 );
   debugger;
  
    const index= this.allMicros.findIndex(a=>a.MicroId === id);
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

 Edit(item:any)
 {

  this.http.post("http://localhost:38630/api/MicroOrganismInfoes",item).subscribe(
    (data)=>{console.log(data)}
  );

 }
 GetMicroTypes()
 {
   debugger;
   return this.MicroTypes;
 }


}
