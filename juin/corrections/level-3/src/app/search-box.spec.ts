import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, vi } from 'vitest';
import { SearchBox } from './search-box';

describe('SearchBox', () => {
  beforeEach(async () => {
    vi.useFakeTimers();

    await TestBed.configureTestingModule({
      imports: [SearchBox],
    }).compileComponents();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should emit the query after the debounce delay', () => {
    const fixture = TestBed.createComponent(SearchBox);
    const emitted: string[] = [];
    fixture.componentRef.setInput('debounceMs', 300);
    fixture.componentInstance.queryChange.subscribe((value) => emitted.push(value));
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'signals';
    input.dispatchEvent(new Event('input'));
    vi.advanceTimersByTime(299);

    expect(emitted).toEqual([]);

    vi.advanceTimersByTime(1);
    expect(emitted).toEqual(['signals']);
  });

  it('should emit immediately when cleared', () => {
    const fixture = TestBed.createComponent(SearchBox);
    const emitted: string[] = [];
    fixture.componentRef.setInput('query', 'angular');
    fixture.componentInstance.queryChange.subscribe((value) => emitted.push(value));
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(emitted).toEqual(['']);
  });
});
