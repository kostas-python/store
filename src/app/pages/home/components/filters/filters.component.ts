import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [],
    templateUrl: './filters.component.html' ,
  
  })
  export class FiltersComponent implements OnInit{
    categories = ['shoes','sports'];
   
    
    ngOnInit(): void {
      

  }
}