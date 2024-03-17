import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, MatToolbarModule, MatMenuModule, 
    MatIconModule, MatBadgeModule, 
 ],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit{
  cols =3;
  
  ngOnInit(): void {

  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

}
