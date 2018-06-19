import { Injectable } from '@angular/core';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';
import { IMicroType } from 'src/app/shared/models/interfaces/IMicroType ';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MicroService {

  private allTopics:IMicroItem[];
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
  private allMicros:IMicroItem[] = [
    {
      id:1,
      name:'Salmonella',
      type:'bacteria',
      img:'./assets/images/micro/sallamonia.jpg',
      description:'Salmonella, the name of a group of bacteria, is one of the most common causes of food poisoning in the United States. Usually, symptoms last 4-7 days and most people get better without treatment. But, Salmonella can cause more serious illness in older adults, infants, and persons with chronic diseases. Salmonella is killed by cooking and pasteurization.',
      FoodUsualyInvolved: 'eggs, poultry, meat, milk or juice, cheese, melons and nuts',
      Source:'Food:eggs, poultry, meat, milk or juice, cheese, melons, spices, and nuts. Animals and their environment:snakes, turtles, lizards, amphibians (frogs), birds (baby chicks) and pet food and treats.',
      Prevention:'Avoid eating high-risk foods, undercooked ground beef or poultry.Clean hands with soap and warm water before handling food. Clean surfaces before preparing food on them. Separate cooked foods from ready-to-eat foods. Cook foods to a safe internal temperature. Wash your hand after contact with animals.',
    },
    {
      id:2,      
      name:'Norovirus',
      type:'virus',
      img:'./assets/images/micro/nova.jpg',
      description:'Noroviruses are the most common cause of acute gastroenteritis (infection of the stomach and intestines) in the United States. Norovirus illness spreads easily and is often called stomach flu or viral gastroenteritis,     People who are infected can spread it directly to other people, or can contaminate food or drinks they prepare for other people. The virus can also survive on surfaces that have been contaminated with the virus or be spread through contact with an infected person.',
    FoodUsualyInvolved:'shellfish',
      Source:'	Produce, shellfish, ready-to-eat foods touched by infected food workers (salads, sandwiches, ice, cookies, fruit), or any other foods contaminated with vomit or feces from an infected person',
      Prevention:'Wash hands frequently with soap .Clean and disinfect surfaces.If you are ill with diarrhea or vomiting, do not cook, prepare, or serve food for others.Wash fruits and vegetables.',
    },
    {
      id:3,
      name:'Clostridium perfringens',
      type:'Fungi',
      img:'./assets/images/micro/Clostridium perfringens.jpg',
      description:'Clostridium perfringens (C. perfringens) is one of the most common causes of food poisoning in the United States. According to some estimates, this type of bacteria causes nearly a million illnesses each year.      Cooking kills the growing C. perfringens cells that cause food poisoning, but not necessarily the spores that can grow into new cells. If cooked food is not promptly served or refrigerated, the spores can grow and produce new cells. These bacteria thrive between 40-140˚F (the “Danger Zone”). This means that they grow quickly at room temperature, but they cannot grow at refrigerator or freezer temperatures.',
      FoodUsualyInvolved:'Beef',
      Source:'Beef, Poultry, Gravies',
      Prevention:'Use a food thermometer. Keep food hot after cooking (at 140˚ F or above). Microwave reheated food thoroughly (to 165˚F or above)',
    },
    {
      id:4,
      name:'Campylobacter',
      type:'bacteria',
      img:'./assets/images/micro/bacteria4.jpg',
      description:' Campylobacter is one of the most common causes of food poisoning in the United States. The vast majority of cases occur as isolated events, not as part of recognized outbreaks.',
      FoodUsualyInvolved: 'water, milk',
      Source:'Raw and undercooked poultry, unpasteurized milk, contaminated water.',
      Prevention:'Always cook meat, especially poultry, to safe minimum temperatures.Keep raw meat, especially poultry, separate from other foods.Do not drink raw or unpasteurized milk.',
    },
    {
      id:5,
      name:'Vibrio Infections',
      type:'virus',
      img:'./assets/images/micro/Vibrio.jpeg',
      description:'Vibrio vulnificus (V. vulnificus) and Vibrio parahaemolyticus (V. parahaemolyticus) are bacteria that occur naturally in warm coastal areas, such as the Gulf of Mexico. These bacteria are found in higher concentrations in the summer months when water gets warmer.',
      FoodUsualyInvolved: 'shellfish',
      Source:'Raw or undercooked shellfish, particularly raw oysters',
      Prevention:'Avoid eating raw or undercooked shellfish.',
    },
    {
      id:6,
      name:'E. coli',
      type:'bacteria',
      img:'./assets/images/micro/e-coli.jpg',
      description:'E. coli is the name of a type of bacteria that lives in your intestines and in the intestines of animals. Although most types of E. coli are harmless, some types can make you sick. The worst type of E. coli, known as E. coli O157:H7, causes bloody diarrhea and can sometimes cause kidney failure and even death. E. coli O157:H7 makes a toxin called Shiga toxin and is known as a Shiga toxin-producing E. coli (STEC).  There are many other types of STEC, and some can make you just as sick as E. coli O157:H7.One severe complication associated with E. coli infection is hemolytic uremic syndrome (HUS). The infection produces toxic substances that destroy red blood cells, causing kidney injury. HUS can require intensive care, kidney dialysis, and transfusions.',
      FoodUsualyInvolved: 'undercooked ground beef,milk, soft cheese',
      Source:'Feces of infected people. Contaminated water, including drinking untreated water and swimming in contaminated water .Animals and their environment: particularly cows, sheep, and goats. If you don’t wash your hands carefully after touching an animal or its environment, you could get an E. coli infection',
      Prevention:'Avoid eating high-risk foods. Use a food thermometer to make sure that ground beef has reached a safe internal temperature of 160° F. Wash hands before preparing food',
    },
    {
      id:7,
      name:'Listeria',
      type:'Parasites',
      img:'./assets/images/micro/Listeria.jpg',
      description:'Listeria is the name of a bacteria found in soil and water and some animals, including poultry and cattle. It can be present in raw milk and foods made from raw milk. It can also live in food processing plants and contaminate a variety of processed meats. Listeria is unlike many other germs because it can grow even in the cold temperature of the refrigerator. Listeria is killed by cooking and pasteurization.',
      FoodUsualyInvolved: 'Ready-to-eat deli meats and hot dogs',
      Source:' meat spreads Unpasteurized (raw) milk and dairy products Soft cheese made with unpasteurized milk, such as queso fresco, Feta, Brie, Camembert Refrigerated smoked seafood. Raw sprouts',
      Prevention:'Do not drink raw (unpasteurized) milk, Wash hands, knives, countertops, and cutting boards. Persons in higher risk groups should heat hot dogs, cold cuts, and deli meats before eating them.',
    }
  ] ;
  public lengthOfMicros : number = this.allMicros.length;
constructor() { 
}

GetAllMicros():Observable<IMicroItem[]>
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

 Edit(item:IMicroItem)
 {
  //  debugger;
  //  let item = this.GetbyId(id);

  const index= this.allMicros.findIndex(a=>a.id === item.id);
  if(index >-1)
  {
    this.allMicros[index] = item;
    return item;
  }
 }
 GetMicroTypes()
 {
   return this.MicroTypes;
 }


}
