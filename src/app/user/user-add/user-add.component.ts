import { UserService } from './../../shared/services/user.service';
import { IUser } from './../../shared/models/interfaces/IUser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
public newUser :IUser;
public isEdit:boolean=false;
public id:number;
  constructor(private userService:UserService,private router:Router, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.newUser={
      id:0,
      name: '',
      img: '',
      Email: '',
      passWord: '',
      age:0
    }
    
    this.ActivatedRoute.params.subscribe(
        
      (params)=>{ 
        debugger;
         this.id = params['id'];
         if(this.id!=null)
         {
           debugger;
          this.newUser =  this.userService.GetbyId(this.id);
           this.isEdit = true;
         }
       }
    )
  }
  onSave(myform:NgForm)
  {
    if(this.newUser!=null && myform.valid && this.isEdit== false)
    {
      this.newUser.id = this.userService.lengthOfUsers+1;
      this.newUser.img = '../assets/images/default.png'
      this.userService.AddNewUser(this.newUser);   
      this.router.navigate(['UserListing']) ;       
    }
    else if(this.isEdit == true)
    {
      this.userService.Edit(this.newUser);
    }
    this.router.navigate(['user']) ; 

  }

  onCancel()
  {
    this.router.navigate(['user']) ;      
  }

}
