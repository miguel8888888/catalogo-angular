import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrosService } from './services/registros.service';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
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