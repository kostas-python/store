import { Component, EventEmitter, Input, OnInit,  Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../models/product.model';





@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatIconModule, MatCardModule ],
  templateUrl: './product-isBoxedPrimitive.component.html' ,

})


export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Sneakers',
    price: 150,
    category: 'shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150'
  };

  @Output()addToCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
function newEventEmitter() {
  throw new Error('Function not implemented.');
}

