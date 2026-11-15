import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  protected readonly projects = [
    { number: '01', kind: 'FILM PROJECT', year: '', title: 'Nightbus Sessions', description: 'A film project connected to Yajoo’s music.', color: '#70563c', image: '/media/nightbus-film.jpg', imageAlt: 'Poster artwork for A Film by Siddhartha Nepali' },
    { number: '02', kind: 'LIVE PERFORMANCE', year: '17 APRIL', title: 'The Last Call', description: 'A performance by Yajoo at Moksh.', color: '#47545a', image: '/media/last-call.jpg', imageAlt: 'The Last Call performance poster' },
    { number: '03', kind: 'FESTIVAL PERFORMANCE', year: '2025', title: 'International Katjazz Session', description: 'A performance at the 2025 International Katjazz festival.', color: '#514536', image: '/media/katjazz-2025.jpg', imageAlt: 'International Katjazz Festival 2025 poster' },
    { number: '04', kind: 'FLUTE PERFORMANCE', year: '2024', title: 'TEDx Baneshwor', description: 'Flute performance at TEDx Baneshwor, 2nd edition.', color: '#46464d', image: '/media/tedx-2024.jpg', imageAlt: 'TEDx Baneshwor performer poster' },
    { number: '05', kind: 'LIVE PERFORMANCE', year: '2023', title: 'World Music Day', description: 'A World Music Day performance in Kathmandu.', color: '#4c4940', image: '/media/world-music-day-2023.jpg', imageAlt: 'World Music Day event poster, 21 June 2023' },
  ];
}
