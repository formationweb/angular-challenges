import { AsyncPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, fromEvent, map, merge, Subject } from 'rxjs';

@Component({
  selector: 'app-video',
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <section class="video-player" aria-label="Lecteur vidéo">
      <video #videoRef width="400" controls>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>

      <button type="button" (click)="togglePlay$.next()">
        {{ (isPlaying$ | async) ? 'Pause' : 'Play' }}
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
export class Video implements AfterViewInit {
  private destroyRef = inject(DestroyRef);
  private videoEl = viewChild<ElementRef<HTMLVideoElement>>('videoRef');

  isPlaying$ = new BehaviorSubject(false);
  togglePlay$ = new Subject<void>();

  ngAfterViewInit(): void {
    const video = this.videoEl()?.nativeElement;

    if (!video) {
      return;
    }

    merge(
      fromEvent(video, 'play').pipe(map(() => true)),
      fromEvent(video, 'pause').pipe(map(() => false)),
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isPlaying) => {
        this.isPlaying$.next(isPlaying);
      });

    this.togglePlay$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isPlaying$.value ? video.pause() : video.play();
      });
  }
}
