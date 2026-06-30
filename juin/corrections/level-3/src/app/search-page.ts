import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from './products';
import { SearchBox } from './search-box';

type CategoryFilter = 'Toutes' | Product['category'];
type SortOrder = 'name-asc' | 'name-desc';

@Component({
  selector: 'app-search-page',
  imports: [SearchBox],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly searchTerm = signal('');
  protected readonly products = signal(PRODUCTS);
  protected readonly selectedCategory = signal<CategoryFilter>('Toutes');
  protected readonly sortOrder = signal<SortOrder>('name-asc');
  protected readonly isLoading = signal(true);
  protected readonly hasError = signal(false);

  protected readonly normalizedSearchTerm = computed(() => this.searchTerm().trim().toLowerCase());

  protected readonly categories = computed<CategoryFilter[]>(() => [
    'Toutes',
    ...Array.from(new Set(this.products().map((product) => product.category))).sort(),
  ]);

  protected readonly filteredProducts = computed(() => {
    const term = this.normalizedSearchTerm();
    const category = this.selectedCategory();

    return this.products()
      .filter((product) => category === 'Toutes' || product.category === category)
      .filter((product) => {
        if (!term) {
          return true;
        }

        return [product.name, product.category, product.description, product.status].some((value) =>
          value.toLowerCase().includes(term),
        );
      })
      .sort((first, second) => {
        const direction = this.sortOrder() === 'name-asc' ? 1 : -1;
        return first.name.localeCompare(second.name) * direction;
      });
  });

  protected readonly hasSearchTerm = computed(() => this.normalizedSearchTerm().length > 0);
  protected readonly resultCount = computed(() => this.filteredProducts().length);

  constructor() {
    this.searchTerm.set(this.route.snapshot.queryParamMap.get('q') ?? '');

    setTimeout(() => {
      this.isLoading.set(false);
    }, 250);
  }

  protected updateSearchTerm(value: string): void {
    this.searchTerm.set(value);
    this.router.navigate([], {
      queryParams: { q: value || null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  protected updateCategory(value: string): void {
    this.selectedCategory.set(value as CategoryFilter);
  }

  protected updateSortOrder(value: string): void {
    this.sortOrder.set(value as SortOrder);
  }

  protected simulateError(): void {
    this.hasError.set(true);
  }

  protected retryLoading(): void {
    this.hasError.set(false);
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
    }, 250);
  }
}
