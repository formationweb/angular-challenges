import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap, provideRouter } from '@angular/router';
import { afterEach, beforeEach, vi } from 'vitest';
import { SearchPage } from './search-page';

describe('SearchPage', () => {
  beforeEach(async () => {
    vi.useFakeTimers();

    await TestBed.configureTestingModule({
      imports: [SearchPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should search across name, category, description, and status', () => {
    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();
    vi.advanceTimersByTime(250);
    fixture.detectChanges();

    const searchBox = fixture.nativeElement.querySelector('app-search-box');
    const input = searchBox.querySelector('input') as HTMLInputElement;
    input.value = 'architecture';
    input.dispatchEvent(new Event('input'));
    vi.advanceTimersByTime(300);
    fixture.detectChanges();

    const results = fixture.nativeElement.querySelectorAll('li');
    expect(results).toHaveLength(1);
    expect(results[0].textContent).toContain('Component Patterns');
  });

  it('should reset the search term', async () => {
    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();
    vi.advanceTimersByTime(250);
    fixture.detectChanges();

    const searchBox = fixture.nativeElement.querySelector('app-search-box');
    const input = searchBox.querySelector('input') as HTMLInputElement;
    input.value = 'signals';
    input.dispatchEvent(new Event('input'));
    vi.advanceTimersByTime(300);
    fixture.detectChanges();
    await Promise.resolve();
    fixture.detectChanges();

    const button = searchBox.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    await Promise.resolve();
    fixture.detectChanges();

    expect(input.value).toBe('');
    expect(fixture.nativeElement.querySelectorAll('li')).toHaveLength(6);
  });

  it('should show an empty state when no result matches', () => {
    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();
    vi.advanceTimersByTime(250);
    fixture.detectChanges();

    const searchBox = fixture.nativeElement.querySelector('app-search-box');
    const input = searchBox.querySelector('input') as HTMLInputElement;
    input.value = 'unknown';
    input.dispatchEvent(new Event('input'));
    vi.advanceTimersByTime(300);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.empty-state')?.textContent).toContain(
      'Aucune ressource',
    );
  });

  it('should initialize the search term from the query param', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [SearchPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({ q: 'signals' }),
            },
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: () => Promise.resolve(true),
          },
        },
      ],
    });

    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();
    vi.advanceTimersByTime(250);
    fixture.detectChanges();
    await Promise.resolve();
    fixture.detectChanges();

    const searchBox = fixture.nativeElement.querySelector('app-search-box');
    const input = searchBox.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('signals');
  });
});
