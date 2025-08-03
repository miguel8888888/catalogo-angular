import {Component, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export default class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
