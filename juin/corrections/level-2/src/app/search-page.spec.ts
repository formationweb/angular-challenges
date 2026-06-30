import { TestBed } from '@angular/core/testing';
import { SearchPage } from './search-page';

describe('SearchPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPage],
    }).compileComponents();
  });

  it('should search across name, category, and description', () => {
    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'architecture';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const results = fixture.nativeElement.querySelectorAll('li');
    expect(results).toHaveLength(1);
    expect(results[0].textContent).toContain('Component Patterns');
  });

  it('should reset the search term', async () => {
    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'signals';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(input.value).toBe('');
    expect(fixture.nativeElement.querySelectorAll('li')).toHaveLength(6);
  });

  it('should show an empty state when no result matches', () => {
    const fixture = TestBed.createComponent(SearchPage);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'unknown';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.empty-state')?.textContent).toContain(
      'Aucune ressource',
    );
  });
});
