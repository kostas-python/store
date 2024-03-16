import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, ],
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
