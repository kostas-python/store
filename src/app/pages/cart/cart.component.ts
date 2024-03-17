import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, 
    MatCardModule, 
    MatIconModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule  ],

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
  

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    
      
  }

  onCheckout(): void {
    
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }



}


