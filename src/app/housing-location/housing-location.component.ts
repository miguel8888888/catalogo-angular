import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  templateUrl: 
  `
  <p>text</p>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}