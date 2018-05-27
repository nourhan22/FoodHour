import { IIngredientNutiritions } from './../../shared/models/interfaces/IIngredientNutiritions';
import { IIngredient } from './../../shared/models/interfaces/IIngredient';
import { Component, OnInit } from '@angular/core';
import { INutiritionType } from '../../shared/models/interfaces/INutiritionType';
import { IngredientService } from '../../shared/services/ingredient.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD


=======
>>>>>>> a134678c7297cef6a6da252bd5fd37664195dacc

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {

  public newIngredient : IIngredient;
  public newIngredientNutiritions:IIngredientNutiritions;
  public nutiritionTypes:INutiritionType[];
    constructor(private ingredientService : IngredientService,private router:Router) { }
  
    ngOnInit() {
      this.newIngredientNutiritions ={
        nutiritionName:'',
        nutiritionType:'',
        percentage:''
      }
      this.newIngredient = {
        name:'',
        img:'',
        desc:'',
        id:0,
        }
  
        this.nutiritionTypes = this.ingredientService.GetNutiritionTypes();
    }
  
    onSave(myform:NgForm)
    {
      if(this.newIngredient!=null && myform.valid)
      {
        this.newIngredient.id = this.ingredientService.lengthOfIngredients+1;
<<<<<<< HEAD
        this.newIngredient.img = '../assets/images/default.png';
         
=======
        this.newIngredient.img = '../assets/images/default.png'
>>>>>>> a134678c7297cef6a6da252bd5fd37664195dacc
        this.ingredientService.AddNewIngredient(this.newIngredient);   
        this.router.navigate(['IngredientListing']) ;       
      }
    }
  
    onCancel()
    {
      this.router.navigate(['IngredientListing']) ;      
    }
<<<<<<< HEAD


=======
>>>>>>> a134678c7297cef6a6da252bd5fd37664195dacc
  //---------------------------------------------------------------
//   $(document).ready(function() {
//     $("#addType").click(function () {
//         var x = document.getElementById("myDiv");
//         if (x.style.display == "none") {
//             x.style.display = "block";
//         }
//         else {
//             x.style.display = "block";
//         }
<<<<<<< HEAD


//         //$("#myForm")[0].reset();


//         //////////////////
//         //var v0='<td class="counterCell"></td>';
//         var v1 = $('#dropDownType option:selected').val();
//         var v2 = $('#NutiritionType').val();
//         var v3 = $('#Percentage').val();



//         var tds = v1 + v2+v3;
//         //$("table:first tr td:last-child").addClass('Delete');
//         $("#mytable").append('<tr><td class="counterCell"></td><td>' + v1 + '</td><td>' + v2 + '</td><td>' + v3 +'</td><td><button class="Delete" onclick="myFun(this)"><i class="fa fa-times"></i></button></td></tr>');

=======


//         //$("#myForm")[0].reset();


//         //////////////////
//         //var v0='<td class="counterCell"></td>';
//         var v1 = $('#dropDownType option:selected').val();
//         var v2 = $('#NutiritionType').val();
//         var v3 = $('#Percentage').val();



//         var tds = v1 + v2+v3;
//         //$("table:first tr td:last-child").addClass('Delete');
//         $("#mytable").append('<tr><td class="counterCell"></td><td>' + v1 + '</td><td>' + v2 + '</td><td>' + v3 +'</td><td><button class="Delete" onclick="myFun(this)"><i class="fa fa-times"></i></button></td></tr>');

>>>>>>> a134678c7297cef6a6da252bd5fd37664195dacc
//     });

}
