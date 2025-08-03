import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {CurrencyPipe, CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import SidenavComponent  from './components/sidenav/sidenav.component';
import {RegistrosService } from './services/registros.service';

// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }
@Component({
  selector: 'app-root',
  imports: [RouterModule, SidenavComponent, MatSlideToggleModule, MatIconModule, MatDividerModule, MatButtonModule, MatCardModule, MatGridListModule, CurrencyPipe, MatSidenavModule, MatTreeModule, MatExpansionModule, HomeComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'homes';
  registros: any[] = [];

  constructor(private registrosService: RegistrosService) {}

  ngOnInit(): void {
    this.registrosService.obtenerRegistros().subscribe(
      data => this.registros = data,
      error => console.error('Error al obtener registros', error)
    );
  }
}