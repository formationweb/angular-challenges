import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  linkedSignal,
  output,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { map, Subject, switchMap, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBox {
  readonly query = input('');
  readonly label = input('Recherche');
  readonly placeholder = input('Rechercher');
  readonly debounceMs = input(300);
  readonly queryChange = output<string>();
  readonly localQuery = linkedSignal(() => this.query())

  private readonly queryUpdates = new Subject<string>();
  private readonly clearUpdates = new Subject<void>();

  constructor() {
    this.queryUpdates
      .pipe(
        switchMap((value) =>
          timer(this.debounceMs()).pipe(
            map(() => value),
            takeUntil(this.clearUpdates),
          ),
        ),
        takeUntilDestroyed(),
      )
      .subscribe((value) => {
        this.queryChange.emit(value);
      });
  }

  protected updateQuery(value: string): void {
    this.localQuery.set(value);
    this.queryUpdates.next(value);
  }

  protected clearQuery(): void {
    this.localQuery.set('');
    this.clearUpdates.next();
    this.queryChange.emit('');
  }
}
