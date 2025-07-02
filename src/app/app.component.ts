import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatSlideToggleModule, MatExpansionModule, MatDividerModule, MatCardModule, MatGridListModule, MatIconModule, MatButtonModule, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <mat-divider></mat-divider>
      <mat-slide-toggle>Toggle me!</mat-slide-toggle>
      <mat-divider></mat-divider>
      <mat-accordion>
        <mat-expansion-panel hideToggle>
          <mat-expansion-panel-header>
            <mat-panel-title> This is the expansion title </mat-panel-title>
            <mat-panel-description> This is a summary of the content </mat-panel-description>
          </mat-expansion-panel-header>
          <p>This is the primary content of the panel.</p>
        </mat-expansion-panel>
        <mat-expansion-panel (opened)="panelOpenState.set(true)" (closed)="panelOpenState.set(false)">
          <mat-expansion-panel-header>
            <mat-panel-title> Self aware panel </mat-panel-title>
            <mat-panel-description>
              Currently I am {{panelOpenState() ? 'open' : 'closed'}}
            </mat-panel-description>
          </mat-expansion-panel-header>
          <p>I'm visible because I am open</p>
        </mat-expansion-panel>
      </mat-accordion>
      <mat-divider></mat-divider>
      <mat-card appearance="outlined" class="mt-4">

        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>Simple card</mat-card-content>
        <img mat-card-avatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu">
        <img mat-card-sm-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <img mat-card-md-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <img mat-card-lg-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <mat-card-footer>
          <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
            <button mat-fab extended>
                      <mat-icon>favorite</mat-icon>
                      Basic
                    </button>
          </mat-card-actions>
        </mat-card-footer>
      </mat-card>
      <mat-divider></mat-divider>
      <mat-grid-list cols="3" rowHeight="2:2">
        <mat-grid-tile>
          <mat-card appearance="outlined" class="mt-4">
            <mat-card-header>
              <mat-card-title>Card Title</mat-card-title>
              <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>Simple card</mat-card-content>
            <img mat-card-lg-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
            <mat-card-footer>
              <mat-card-actions>
                <button mat-button>LIKE</button>
                <button mat-button>SHARE</button>
              </mat-card-actions>
            </mat-card-footer>
          </mat-card>
        </mat-grid-tile>
        <mat-grid-tile colspan="2">
          <mat-grid-tile-header> Numeros </mat-grid-tile-header> 
          <p class="text-xl m-5">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <mat-grid-tile-footer class="!py-9">
            <section>
              <div class="example-label">Extended Fab</div>
              <div class="example-button-row">
                <div class="example-flex-container">
                  <div class="example-button-container">
                    <button mat-fab extended>
                      <mat-icon>favorite</mat-icon>
                      Basic
                    </button>
                  </div>
                  <div class="example-button-container">
                    <button mat-fab extended disabled>
                      <mat-icon>favorite</mat-icon>
                      Disabled
                    </button>
                  </div>
                  <div class="example-button-container">
                    <a mat-fab extended routerLink=".">
                      <mat-icon>favorite</mat-icon>
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </mat-grid-tile-footer>
        </mat-grid-tile>
        <mat-grid-tile>3</mat-grid-tile>
        <mat-grid-tile>4</mat-grid-tile>
      </mat-grid-list>
      
      <mat-divider></mat-divider>
      
      <section class="listing">
        <img
        class="listing-photo"
        src="./assets/descarga.jpg"
        alt="Exterior photo of name"
        crossorigin
      />
      <h2 class="listing-heading">Press on</h2>
      <p class="listing-location">Precio: {{ 80000 | currency : 'USD': 'symbol': '1.0-0'}}</p>
      <button mat-fab aria-label="Example icon button with a delete icon">
        <mat-icon>favorite</mat-icon>
      </button>
    </section>

    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  readonly panelOpenState = signal(false);
}
