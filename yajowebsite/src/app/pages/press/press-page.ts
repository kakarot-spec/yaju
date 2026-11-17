import { Component } from '@angular/core';

@Component({
  selector: 'app-press-page',
  templateUrl: './press-page.html',
  styleUrl: './press-page.css',
})
export class PressPage {
  protected readonly stories = [
    { number: '01', title: 'Add news headline 01', image: '' },
    { number: '02', title: 'Add news headline 02', image: '' },
    { number: '03', title: 'Add news headline 03', image: '' },
  ];
}
