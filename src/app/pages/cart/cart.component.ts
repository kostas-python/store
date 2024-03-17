import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html' ,
  styles: ``
})

export class CartComponent implements OnInit {
  cart: Cart = { items:[]};
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource: CartItem[] = [];
  

  constructor() {}

  ngOnInit(): void {
    
      
    }
  
}


