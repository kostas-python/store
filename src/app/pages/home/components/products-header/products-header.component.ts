import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './products-header.component.html' ,

})
export class ProductsHeaderComponent {

}
