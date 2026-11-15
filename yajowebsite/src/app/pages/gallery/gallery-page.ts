import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css',
})
export class GalleryPage {
  protected readonly photos = [
    { number: '01', caption: 'Portraits', tone: '#725a47', tall: true },
    { number: '02', caption: 'On the road', tone: '#425455', tall: false },
    { number: '03', caption: 'Behind the scenes', tone: '#796d51', tall: false },
    { number: '04', caption: 'Live moments', tone: '#654a4c', tall: false },
    { number: '05', caption: 'In the studio', tone: '#4f5c68', tall: true },
    { number: '06', caption: 'Life lately', tone: '#746343', tall: false },
  ];
}
