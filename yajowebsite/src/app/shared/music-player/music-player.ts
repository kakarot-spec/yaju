import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Add the YouTube video ID here when Yajoo's music link is ready.
const CONFIGURED_YOUTUBE_VIDEO_ID = '';
const YOUTUBE_VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;
const YOUTUBE_VIDEO_ID = YOUTUBE_VIDEO_ID_PATTERN.test(
  CONFIGURED_YOUTUBE_VIDEO_ID,
)
  ? CONFIGURED_YOUTUBE_VIDEO_ID
  : '';

@Component({
  standalone: true,
  selector: 'app-music-player',
  templateUrl: './music-player.html',
  styleUrl: './music-player.css',
})
export class MusicPlayer {
  constructor(private readonly sanitizer: DomSanitizer) {}

  protected readonly videoId = YOUTUBE_VIDEO_ID;
  protected isPlaying = false;
  protected embedUrl: SafeResourceUrl | null = null;

  protected togglePlayback(): void {
    this.isPlaying = !this.isPlaying;
    const url = this.isPlaying
      ? `https://www.youtube-nocookie.com/embed/${this.videoId}?autoplay=1&controls=0&loop=1&playlist=${this.videoId}`
      : null;
    this.embedUrl = url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  }
}
