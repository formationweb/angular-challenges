import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Product = {
  id: number;
  name: string;
  category: string;
};

const PRODUCTS: Product[] = [
  { id: 1, name: 'Angular Essentials', category: 'Formation' },
  { id: 2, name: 'Signals Starter Kit', category: 'Outils' },
  { id: 3, name: 'RxJS Deep Dive', category: 'Formation' },
  { id: 4, name: 'TypeScript Handbook', category: 'Documentation' },
  { id: 5, name: 'Component Patterns', category: 'Architecture' },
  { id: 6, name: 'Testing Recipes', category: 'Qualite' },
];

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly searchModel = signal('')
  protected readonly products = signal<Product[]>(PRODUCTS)

  protected readonly filteredProducts = computed(() => {
    const term = this.searchModel().trim().toLowerCase()

    if (!term) {
      return this.products()
    }

    return this.products().filter(product => product.name.toLowerCase().includes(term))
  })
}
