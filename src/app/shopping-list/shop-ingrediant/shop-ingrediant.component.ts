import { Component, OnInit } from '@angular/core';
import { ShopIngrediantService } from '../../shared/services/ShopIngrediant.service';
import { IShopIngrediant } from '../../shared/models/interfaces/IShopIngrediant';

@Component({
  selector: 'app-shop-ingrediant',
  templateUrl: './shop-ingrediant.component.html',
  styleUrls: ['./shop-ingrediant.component.css']
})
export class ShopIngrediantComponent implements OnInit {
public ingrediants:IShopIngrediant[];
  constructor(private shopingredservice:ShopIngrediantService) { }

  ngOnInit() {
    this.shopingredservice.getAll().subscribe(
      (data)=>{
        
        this.ingrediants= data;
      }
    );
  }

}
