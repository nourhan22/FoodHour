import { IIngredientNutiritions } from './../../shared/models/interfaces/IIngredientNutiritions';
import { IIngredient } from './../../shared/models/interfaces/IIngredient';
import { Component, OnInit } from '@angular/core';
import { INutiritionType } from '../../shared/models/interfaces/INutiritionType';
import { IngredientService } from '../../shared/services/ingredient.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {
  public newIngredientNutirition: IIngredientNutiritions;
  public newIngredient: IIngredient;
  public nutiritionTypes: INutiritionType[];
  public isEdit: boolean = false;
  public id: number;
  constructor(private ingredientService: IngredientService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.newIngredient = {
      name: '',
      img: '',
      desc: '',
      id: 0,
      nutiritions: [{ nutiritionName: 'Choose Type', nutiritionType: '', percentage: 0 }]

    }


    this.nutiritionTypes = this.ingredientService.GetNutiritionTypes();

    this.ActivatedRoute.params.subscribe(

      (params) => {
        debugger;
        this.id = params['id'];
        if (this.id != null) {
          debugger;
          this.newIngredient = this.ingredientService.GetbyId(this.id);
          this.isEdit = true;
        }
      }
    );

  }

  onSave(myform: NgForm) {
    if (this.newIngredient != null && myform.valid && this.isEdit == false) {
      this.newIngredient.id = this.ingredientService.lengthOfIngredients + 1;
      this.newIngredient.img = '../assets/images/default.png'
      this.ingredientService.AddNewIngredient(this.newIngredient);
      this.router.navigate(['IngredientListing']);
    }
    else if (this.isEdit == true) {
      this.ingredientService.Edit(this.newIngredient);
    }
    this.router.navigate(['IngredientListing']);

  }

  onCancel() {
    this.router.navigate(['IngredientListing']);
  }
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


  //         //$("#myForm")[0].reset();


  //         //////////////////
  //         //var v0='<td class="counterCell"></td>';
  //         var v1 = $('#dropDownType option:selected').val();
  //         var v2 = $('#NutiritionType').val();
  //         var v3 = $('#Percentage').val();



  //         var tds = v1 + v2+v3;
  //         //$("table:first tr td:last-child").addClass('Delete');
  //         $("#mytable").append('<tr><td class="counterCell"></td><td>' + v1 + '</td><td>' + v2 + '</td><td>' + v3 +'</td><td><button class="Delete" onclick="myFun(this)"><i class="fa fa-times"></i></button></td></tr>');

  //     });

}
