import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [CommonModule],
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