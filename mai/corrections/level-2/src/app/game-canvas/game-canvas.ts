import { Component, signal, viewChild, ElementRef, effect, output, input } from '@angular/core';

const SPRITE_COLUMNS = 4;
const SPRITE_ROWS = 4;

interface Position {
  row: number;
  col: number;
}

type Direction = 'up' | 'down' | 'left' | 'right';

const DIRECTION_ROW: Record<Direction, number> = {
  down: 0,
  left: 1,
  up: 2,
  right: 3,
};

interface Player extends Position { 
  direction: Direction;
  frame: number;
  size: number;
  x: number;
  y: number;
}


@Component({
  selector: 'app-game-canvas',
  imports: [],
  templateUrl: './game-canvas.html',
  styleUrl: './game-canvas.css',
})
export class GameCanvas {
  canvasHeight = signal(600);
  canvasWidth = signal(600);
  canvas = viewChild<ElementRef<HTMLCanvasElement>>('gameCanvas')
  spriteLoaded = signal(false);
  private sprite = new Image();
  private player = signal<Player>({ row: 0, col: 0, direction: 'left', frame: 0, size: 40, x: 0, y: 0 })
  playerPosition = output<Position>()
  direction = output<Direction>()
  speed = input(3)
  reset = input(0)

  constructor() {
    this.sprite.src = '/character.png';
    this.sprite.onload = () => this.spriteLoaded.set(true);
    effect(() => {
       const canvas = this.canvas()
       if (!canvas || !this.spriteLoaded()) {
        return;
       }
       this.draw(canvas.nativeElement, this.player());
    })
    effect(() => {
      const player = this.player();
      this.playerPosition.emit({ row: player.row, col: player.col });
      this.direction.emit(player.direction);
    });
    effect(() => {
      if (this.reset()) {
        this.player.set({ row: 0, col: 0, direction: 'left', frame: 0, size: 40, x: 0, y: 0 });
      }
    })
  }

  movePlayer(event: KeyboardEvent) {
     // mapping with event.key and updating player position and direction accordingly
     const directionMap: Record<string, Direction> = {  
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
    };

    const direction = directionMap[event.key];

    this.player.update(player => {
      if (!direction) {
        return player;
      }

      const nextPlayer = { ...player, direction };

      if (direction === 'up' && player.row > 0) {
        nextPlayer.row += this.speed();
        nextPlayer.y -= player.size;
      } else if (direction === 'down' && player.row < this.canvasHeight() / player.size - 1) {
        nextPlayer.row += this.speed();
        nextPlayer.y += player.size;
      } else if (direction === 'left' && player.col > 0) {
        nextPlayer.col -= this.speed();
        nextPlayer.x -= player.size;
      } else if (direction === 'right' && player.col < this.canvasWidth() / player.size - 1) {
        nextPlayer.col += this.speed();
        nextPlayer.x += player.size;
      }

      nextPlayer.frame = (player.frame + 1) % SPRITE_COLUMNS;

      return nextPlayer;
    })

    if (this.canvas()) {
      this.draw(this.canvas()!.nativeElement, this.player());
    }
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
      context.lineTo(x, this.canvasHeight() );
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
