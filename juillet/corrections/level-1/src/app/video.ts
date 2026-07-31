import { Component, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
    <section class="video-player" aria-label="Lecteur vidéo">
      <video
        #videoRef
        width="400"
        controls
        (loadstart)="isLoading.set(true)"
        (canplay)="isLoading.set(false)"
        (play)="isPlaying.set(true)"
        (pause)="isPlaying.set(false)"
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>

      @if (isLoading()) {
        <p>Chargement de la vidéo...</p>
      }

      <button type="button" (click)="togglePlay()" [disabled]="isLoading()">
        {{ isPlaying() ? 'Pause' : 'Play' }}
      </button>
    </section>
  `,
  styles: `
    .video-player {
      display: grid;
      gap: 16px;
      justify-items: start;
      padding: 24px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #ffffff;
    }

    video {
      display: block;
      width: min(400px, 100%);
      border-radius: 6px;
      background: #111827;
    }

    p {
      margin: 0;
      color: #4b5563;
    }

    button {
      min-width: 96px;
      padding: 8px 14px;
      border: 1px solid #1f2937;
      border-radius: 6px;
      color: #ffffff;
      background: #1f2937;
      cursor: pointer;
    }

    button:disabled {
      border-color: #9ca3af;
      background: #9ca3af;
      cursor: not-allowed;
    }
  `,
})
export class Video {
  private videoEl = viewChild<ElementRef<HTMLVideoElement>>('videoRef');

  isPlaying = signal(false);
  isLoading = signal(true);

  togglePlay(): void {
    const video = this.videoEl()?.nativeElement;

    if (!video) {
      return;
    }

    this.isPlaying() ? video.pause() : video.play();
  }
}
