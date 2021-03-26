import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {

  public slides: Array<any> = [
    { icon: 'person-add-outline', text: 'Profle'},
    { icon: 'phone-portrait-outline', text: 'Call'},
    { icon: 'wallet-outline', text: 'Transact'},
    { icon: 'options-outline', text: 'Settings'},
    { icon: 'help-circle-outline', text: 'Help'},
    { icon: 'barcode-outline', text: 'Invoice'},
    { icon: 'card-outline', text: 'Orders'},

  ];


  constructor() { }

  ngOnInit() {
  }

}
