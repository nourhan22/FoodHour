import { Component, OnInit } from '@angular/core';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';
import { MicroService } from 'src/app/shared/services/Micro.service';
import { IMicroType } from 'src/app/shared/models/interfaces/IMicroType ';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-micro-organism-add',
  templateUrl: './micro-organism-add.component.html',
  styleUrls: ['./micro-organism-add.component.css']
})
export class MicroOrganismAddComponent implements OnInit {
public newMicro : IMicroItem;
public microTypes:IMicroType[];
public id:number;
public isEdit :boolean = false;
  constructor(private microService : MicroService,private router:Router 
              ,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.newMicro = {
      name:'',
      type:'Choose Type',
      Source:'',
      FoodUsualyInvolved:'',
      Prevention:'',
      img:'',
      description:'',
      id:0
      }

      this.microTypes = this.microService.GetMicroTypes();
      this.ActivatedRoute.params.subscribe(
        
         (params)=>{ 
           debugger;
            this.id = params['id'];
            if(this.id!=null)
            {
              debugger;
             this.newMicro =  this.microService.GetbyId(this.id);
             this.isEdit = true;
            }
          }
       )
  }

  onSave(myform:NgForm)
  {
    

    if(this.newMicro!=null && myform.valid && this.isEdit== false)
    {
      this.newMicro.id = this.microService.lengthOfMicros+1;
      this.newMicro.img = '../assets/images/default.png';
      this.microService.AddNewMicro(this.newMicro);   
           
    }
    else if(this.isEdit == true)
    {
      debugger;
      this.microService.Edit(this.newMicro);
    }

    this.router.navigate(['microOrganismListing']) ; 
  }

  onCancel()
  {
    this.router.navigate(['microOrganismListing']) ;      
  }
}
