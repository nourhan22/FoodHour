import { Component, OnInit } from '@angular/core';
import { IMicroItem } from 'src/app/shared/models/interfaces/IMicroItem';
import { MicroService } from 'src/app/shared/services/Micro.service';
import { Router } from '@angular/router';
import { IMicroType } from 'src/app/shared/models/interfaces/IMicroType';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-micro-organism-add',
  templateUrl: './micro-organism-add.component.html',
  styleUrls: ['./micro-organism-add.component.css']
})
export class MicroOrganismAddComponent implements OnInit {
public newMicro : IMicroItem;
public microTypes:IMicroType[];
  constructor(private microService : MicroService ,private router:Router) { }

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
     
  }

  onSave(myform:NgForm)
  {
    console.log(myform.value);
    if(this.newMicro!=null && myform.valid)
    {
      this.newMicro.id = this.microService.lengthOfMicros+1;
      this.newMicro.img = '../assets/images/default.png'
      this.microService.AddNewMicro(this.newMicro);   
      this.router.navigate(['microOrganismListing']) ;  
    }
  }

  onCancel()
  {
    this.router.navigate(['microOrganismListing']) ;      
  }
}
