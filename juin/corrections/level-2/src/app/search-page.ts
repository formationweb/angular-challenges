import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from './products';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  protected readonly searchModel = signal('');
  protected readonly products = signal(PRODUCTS);

  protected readonly normalizedSearchTerm = computed(() => this.searchModel().trim().toLowerCase());

  protected readonly filteredProducts = computed(() => {
    const term = this.normalizedSearchTerm();

    if (!term) {
      return this.products();
    }

    return this.products().filter((product) =>
      [product.name, product.category, product.description].some((value) =>
        value.toLowerCase().includes(term),
      ),
    );
  });

  protected readonly hasSearchTerm = computed(() => this.normalizedSearchTerm().length > 0);
  protected readonly resultCount = computed(() => this.filteredProducts().length);

  protected resetSearch(): void {
    this.searchModel.set('');
  }
}
