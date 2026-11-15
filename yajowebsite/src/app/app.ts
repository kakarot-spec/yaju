import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './shared/site-header/site-header';
import { SiteFooter } from './shared/site-footer/site-footer';
import { MusicPlayer } from './shared/music-player/music-player';

@Component({
  standalone: true,
  imports: [RouterOutlet, SiteHeader, SiteFooter, MusicPlayer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
