import {
  Component,
  ElementRef,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import {
  DIRECTION_ROW,
  Direction,
  GameStateService,
  Player,
  Position,
  SPRITE_COLUMNS,
  SPRITE_ROWS,
} from './game-state.service';

@Component({
  selector: 'app-game-canvas',
  imports: [],
  templateUrl: './game-canvas.html',
  styleUrl: './game-canvas.css',
})
export class GameCanvas {
  private readonly gameState = inject(GameStateService);

  canvasHeight = this.gameState.canvasHeight;
  canvasWidth = this.gameState.canvasWidth;
  canvas = viewChild<ElementRef<HTMLCanvasElement>>('gameCanvas');
  spriteLoaded = signal(false);
  private sprite = new Image();
  playerPosition = output<Position>();
  direction = output<Direction>();
  speed = input(3);
  reset = input(0);

  constructor() {
    this.sprite.src = '/character.png';
    this.sprite.onload = () => this.spriteLoaded.set(true);
    effect(() => {
      const canvas = this.canvas();
      if (!canvas || !this.spriteLoaded()) {
        return;
      }
      this.draw(canvas.nativeElement, this.gameState.player());
    });
    effect(() => {
      const player = this.gameState.player();
      this.playerPosition.emit({
        row: Math.floor(player.y / player.size),
        col: Math.floor(player.x / player.size),
      });
      this.direction.emit(player.direction);
    });
    effect(() => {
      if (this.reset()) {
        this.gameState.resetPlayer();
      }
    });
  }

  movePlayer(event: KeyboardEvent) {
    this.gameState.move(event, this.speed());
  }

  private draw(canvas: HTMLCanvasElement, player: Player): void {
    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    context.clearRect(0, 0, this.canvasWidth(), this.canvasHeight());
    context.fillStyle = '#eef4ec';
    context.fillRect(0, 0, this.canvasWidth(), this.canvasHeight());
    context.strokeStyle = '#c7d7c1';

    for (let x = 0; x <= this.canvasWidth(); x += 40) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, this.canvasHeight());
      context.stroke();
    }

    for (let y = 0; y <= this.canvasHeight(); y += 40) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(this.canvasWidth(), y);
      context.stroke();
    }

    const frameWidth = this.sprite.width / SPRITE_COLUMNS;
    const frameHeight = this.sprite.height / SPRITE_ROWS;
    const sourceX = player.frame * frameWidth;
    const sourceY = DIRECTION_ROW[player.direction] * frameHeight;

    context.drawImage(
      this.sprite,
      sourceX,
      sourceY,
      frameWidth,
      frameHeight,
      player.x,
      player.y,
      player.size,
      player.size,
    );
  }
}
