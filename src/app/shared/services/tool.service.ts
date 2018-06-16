import { Injectable } from '@angular/core';
import { ISmallTool } from '../models/interfaces/ISmallTool';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  public Tools:ISmallTool[]=[
    {
      name:'Hand Mixer',
      img:'./assets/images/tool/hand mixer.jpg',
      id:1,
      description:'Combine ingredients at speed one for slowly stirring in chunky ingredients, speed four for mashing potatoes, speed seven for beating egg whites and whipping meringue.'
    },
    {
      name:'Coffee Machine',
      img:'./assets/images/tool/coffee machine.jpg',
      id:2,
      description:'Enjoy fresh filter coffee at home with our range of filter coffee machines at Tesco direct. From family-sized coffee pots that brew fresh coffee on a timer to personal travel-mug filter machines perfect for one, you never need start your day without a fresh cup to hand again.'
    },
    {
      name:'Food Processor',
      img:'./assets/images/tool/mini_chopper.jpg',
      id:3,
      description:'Food processors are similar to blenders in many forms. The primary difference is that food processors use interchangeable blades and disks (attachments) rather than a fixed blade. Also, their bowls are wider and shorter, a more appropriate shape for the solid or semi-solid foods usually worked in a food processor. Usually, little or no liquid is required in the operation of the food processor, unlike a blender, which requires a certain amount of liquid for the particles to move around the blade.'
    },
    {
      name:'Microwave',
      img:'./assets/images/tool/oven.jpg',
      id:4,
      description:'Microwave oven: An oven that uses micro radiation waves as a source of heat in order to cook food as opposed to a fire source.'
    },
    {
      name:'Rangetop',
      img:'./assets/images/tool/cooker3.jpg',
      id:5,
      description:'Range: This combination of a cooktop and oven is the most common built-in cooking appliance, usually sized between 20 inches and 48 inches, with options for style and placement.'
    },
    {
      name:'Rice Cooker',
      img:'./assets/images/tool/rice maker.jpeg',
      id:6,
      description:'A rice cooker or rice steamer is an automated kitchen appliance designed to boil or steam rice. It consists of a heat source, a cooking bowl, and a thermostat. The thermostat measures the temperature of the cooking bowl and controls the heat. Complex rice cookers may have many more sensors and other components, and may be multipurpose.'
    },
    {
      name:'Gas-Range',
      img:'./assets/images/tool/Gas-Range.jpg',
      id:7,
      description:'Many stoves use natural gas to provide heat,In cooking, a gas stove is a cooker/stove which uses syngas, natural gas, propane, butane, liquefied petroleum gas or other flammable gas as a fuel source.'
    },
    {
      name:'Garlic Peeler ',
      img:'./assets/images/tool/scroll-garlic.gif',
      id:8,
      description:'Peeling garlic can be done quickly and without the mess. Just insert garlic cloves into the soft, flexible scroll and roll it against the countertop. When the garlic peel stops crackling, it is off! The polished silicone surface of the Scroll removes the garlic peel perfectly, leaving it ready to be sliced, crushed or minced.'
    
    }
    
  ];
constructor() { }
public getAll() :Observable<ISmallTool[]>
{
  return of (this.Tools); 
}
public getByIndex(id: number)
{
    return this.Tools.find(function(element){
    return element.id == id;
  })
}
SearchInCookingMethods(txtSearch:string)
{
   let filteredArr = this.Tools.filter(function(ele){
     return ele.name.toLowerCase().includes(txtSearch.toLowerCase());
   })

   return filteredArr;
}
public onDelete(id:number)
{
  const index= this.Tools.findIndex(a=>a.id === id);
  if(index >-1)
  {
    this.Tools.splice(index,1);
  }
}
AddNewTool(item:ISmallTool){
  this.Tools.push(item);
}

Edit(item:ISmallTool)
 {
  //  debugger;
  //  let item = this.GetbyId(id);

  const index= this.Tools.findIndex(a=>a.id === item.id);
  if(index >-1)
  {
    this.Tools[index] = item;
    return item;
  }
 }
 DeleteAll()
 {
  let len = this.Tools.length; 
  this.Tools.splice(0,len);
 }

public lengthOfTool :number=this.Tools.length;
}
