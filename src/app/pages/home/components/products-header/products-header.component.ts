import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule, MatMenuModule, 
    MatIconModule, 
    MatCardModule],
  templateUrl: './products-header.component.html' ,

})
export class ProductsHeaderComponent implements OnInit{
  @Output() columnsCountChange = new EventEmitter<number>();
  sort='desc';
  itemsShowCount = 12;
  
  ngOnInit(): void {
    
  }

  onSortUpdated(newSort: string):void {
    this.sort = newSort;
  }

  onItemsUpdated(newSort: string):void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number):void {
    this.columnsCountChange.emit(colsNum);
  }

}
