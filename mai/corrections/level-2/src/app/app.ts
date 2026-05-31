import { Component, computed, signal } from '@angular/core';
import { GameCanvas } from "./game-canvas/game-canvas";

interface Position {
  row: number;
  col: number;
}

type Direction = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'app-root',
  imports: [GameCanvas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  gridSize = signal(5)
  cells = Array.from({ length: this.gridSize() * this.gridSize() });
  player = signal<Position>({ row: 2, col: 2 });
  isInCorner = computed(() => {
    const player = this.player();
    const lastIndex = this.gridSize() - 1;

    return (
      (player.row === 0 && player.col === 0) ||
      (player.row === 0 && player.col === lastIndex) ||
      (player.row === lastIndex && player.col === 0) ||
      (player.row === lastIndex && player.col === lastIndex)
    );
  });

  resetPlayer() {
    this.player.set({ row: 2, col: 2 });
  }

  move(direction: Direction) {
    this.player.update(pos => {
      const nextPos = { ...pos };

      if (direction === 'up' && pos.row > 0) {
        nextPos.row--;
      } else if (direction === 'down' && pos.row < this.gridSize() - 1) {
        nextPos.row++;
      } else if (direction === 'left' && pos.col > 0) {
        nextPos.col--;
      } else if (direction === 'right' && pos.col < this.gridSize() - 1) {
        nextPos.col++;
      }
      return nextPos;
    });
  }

  isPlayerCell(index: number): boolean {
    const row = Math.floor(index / this.gridSize());
    const col = index % this.gridSize();
    const playerPos = this.player();
    return playerPos.row === row && playerPos.col === col;
  }
}
