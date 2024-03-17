import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatIconModule, MatCardModule ],
  templateUrl: './product-isBoxedPrimitive.component.html' ,

})


export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  constructor() {}

  ngOnInit(): void {

  }

  onAddToCart(): void {
    
  }

}
