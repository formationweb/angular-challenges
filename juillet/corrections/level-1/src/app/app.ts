import { Component } from '@angular/core';
import { Video } from './video';

@Component({
  selector: 'app-root',
  imports: [Video],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
