import {Component} from '@angular/core';
import {PRINTERS} from "../assets/printers-data";
import {Printer} from "./model/printer";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'printing-quoting-sheet';

  selectedCurrency = "";


  constructor() { }

  onCurrencySelected(currency: string) {
    this.selectedCurrency = currency;
    console.log(currency);
  }
}
