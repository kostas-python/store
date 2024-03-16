import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, 
    MatGridListModule, 
    MatMenuModule, 
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatExpansionModule, 
    MatListModule,
    MatToolbarModule, 
    MatTableModule, 
    MatBadgeModule, 
    MatSnackBarModule,
  ],
  template: `
    <h1>Welcome bla bla {{title}}!</h1>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'store';
}
