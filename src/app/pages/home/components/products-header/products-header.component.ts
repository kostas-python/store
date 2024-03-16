import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatSidenavModule],
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
