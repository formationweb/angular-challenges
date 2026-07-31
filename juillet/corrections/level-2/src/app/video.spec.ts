import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Video } from './video';

describe('Video', () => {
  let fixture: ComponentFixture<Video>;
  let component: Video;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Video],
    }).compileComponents();

    fixture = TestBed.createComponent(Video);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a loading message while the video is loading', () => {
    component.isLoading.set(true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Chargement de la vidéo...');
  });

  it('should hide the loading message when the video can play', () => {
    const video = getVideo();

    video.dispatchEvent(new Event('canplay'));
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).not.toContain('Chargement de la vidéo...');
  });

  it('should update playing state when the video plays', () => {
    const video = getVideo();

    video.dispatchEvent(new Event('play'));

    expect(component.isPlaying()).toBe(true);
  });

  it('should update playing state when the video pauses', () => {
    const video = getVideo();

    video.dispatchEvent(new Event('pause'));

    expect(component.isPlaying()).toBe(false);
  });

  it('should display Play when the video is paused', () => {
    component.isPlaying.set(false);
    fixture.detectChanges();

    expect(getButton().textContent?.trim()).toBe('Play');
  });

  it('should display Pause when the video is playing', () => {
    component.isPlaying.set(true);
    fixture.detectChanges();

    expect(getButton().textContent?.trim()).toBe('Pause');
  });

  it('should call play when the button is clicked and the video is paused', () => {
    const video = getVideo();
    const play = vi.fn(() => Promise.resolve());
    video.play = play;
    component.isLoading.set(false);
    component.isPlaying.set(false);
    fixture.detectChanges();

    getButton().click();

    expect(play).toHaveBeenCalledOnce();
  });

  it('should call pause when the button is clicked and the video is playing', () => {
    const video = getVideo();
    const pause = vi.fn();
    video.pause = pause;
    component.isLoading.set(false);
    component.isPlaying.set(true);
    fixture.detectChanges();

    getButton().click();

    expect(pause).toHaveBeenCalledOnce();
  });

  function getVideo(): HTMLVideoElement {
    return fixture.nativeElement.querySelector('video') as HTMLVideoElement;
  }

  function getButton(): HTMLButtonElement {
    return fixture.nativeElement.querySelector('button') as HTMLButtonElement;
  }
});
