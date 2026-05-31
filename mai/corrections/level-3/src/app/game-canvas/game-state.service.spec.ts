import { TestBed } from '@angular/core/testing';
import { GameStateService } from './game-state.service';

describe('GameStateService', () => {
  let service: GameStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStateService);
    service.reset();
  });

  function keydown(key: string): KeyboardEvent {
    return new KeyboardEvent('keydown', { key });
  }

  it('moves the player to the right by increasing x', () => {
    const initialX = service.player().x;

    service.move(keydown('ArrowRight'), 5);

    expect(service.player().x).toBe(initialX + 5);
  });

  it('keeps the player inside the canvas when moving up several times', () => {
    for (let i = 0; i < 10; i++) {
      service.move(keydown('ArrowUp'), 5);
    }

    expect(service.player().y).toBe(0);
  });

  it('uses the new speed when speed changes', () => {
    service.move(keydown('ArrowRight'), 3);
    service.move(keydown('ArrowRight'), 12);

    expect(service.player().x).toBe(15);
  });

  it('resets the player to its initial position', () => {
    service.move(keydown('ArrowRight'), 5);
    service.move(keydown('ArrowDown'), 5);

    service.reset();

    expect(service.player().x).toBe(0);
    expect(service.player().y).toBe(0);
  });

  it('maps ArrowUp to the up direction', () => {
    service.move(keydown('ArrowUp'), 5);

    expect(service.player().direction).toBe('up');
  });

  it('maps q to the left direction', () => {
    service.move(keydown('ArrowRight'), 10);

    service.move(keydown('q'), 4);

    expect(service.player().direction).toBe('left');
    expect(service.player().x).toBe(6);
  });

  it('ignores an unknown key', () => {
    const initialPlayer = service.player();

    service.move(keydown('Unknown'), 5);

    expect(service.player()).toEqual(initialPlayer);
  });
});
