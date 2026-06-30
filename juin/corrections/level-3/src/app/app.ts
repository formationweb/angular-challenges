import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchPage } from './search-page';

@Component({
  selector: 'app-root',
  imports: [SearchPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
