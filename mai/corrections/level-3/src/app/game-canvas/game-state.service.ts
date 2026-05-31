import { Injectable, signal } from '@angular/core';

export const SPRITE_COLUMNS = 4;
export const SPRITE_ROWS = 4;


export type Direction = 'up' | 'down' | 'left' | 'right';

export const DIRECTION_ROW: Record<Direction, number> = {
  down: 0,
  left: 1,
  up: 2,
  right: 3,
};

export interface Player{
  direction: Direction;
  frame: number;
  size: number;
  x: number;
  y: number;
}

export interface Position {
  row: number;
  col: number;
}

const INITIAL_PLAYER: Player = {
  direction: 'left',
  frame: 0,
  size: 40,
  x: 0,
  y: 0,
};

const DIRECTION_MAP: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  q: 'left',
};

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  readonly canvasHeight = signal(600);
  readonly canvasWidth = signal(600);

  private readonly playerState = signal<Player>({ ...INITIAL_PLAYER });
  readonly player = this.playerState.asReadonly();

  reset(): void {
    this.playerState.set({ ...INITIAL_PLAYER });
  }

  resetPlayer(): void {
    this.reset();
  }

  move(event: KeyboardEvent, speed: number): void {
    const direction = DIRECTION_MAP[event.key];

    if (!direction) {
      return;
    }

    this.playerState.update((player) => {
      const nextPlayer = { ...player, direction };
      const maxX = this.canvasWidth() - player.size;
      const maxY = this.canvasHeight() - player.size;

      if (direction === 'up' && player.y > 0) {
        nextPlayer.y = Math.max(0, player.y - speed);
      } else if (direction === 'down' && player.y < maxY) {
        nextPlayer.y = Math.min(maxY, player.y + speed);
      } else if (direction === 'left' && player.x > 0) {
        nextPlayer.x = Math.max(0, player.x - speed);
      } else if (direction === 'right' && player.x < maxX) {
        nextPlayer.x = Math.min(maxX, player.x + speed);
      }
      nextPlayer.frame = (player.frame + 1) % SPRITE_COLUMNS;

      return nextPlayer;
    });
  }
}
