import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';


@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [CommonModule,MatExpansionModule, MatListModule],
    templateUrl: './filters.component.html' ,
  
  })
  export class FiltersComponent implements OnInit{
    @Output() showCategory = new EventEmitter<string>();

    categories = ['shoes','sports'];
   
    
    ngOnInit(): void {
      
    
    }

    onShowCategory(category: string): void {
      this.showCategory.emit(category);
    }



}