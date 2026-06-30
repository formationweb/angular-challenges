# Helper - Level 3

## Observer un événement DOM avec RxJS

`fromEvent()` transforme un événement DOM en Observable.

```ts
fromEvent(video, 'play')
```

Pour transformer l’événement en booléen :

```ts
fromEvent(video, 'play').pipe(map(() => true))
```

## Fusionner plusieurs événements

`merge()` permet d’écouter plusieurs Observables comme un seul flux :

```ts
merge(
  fromEvent(video, 'play').pipe(map(() => true)),
  fromEvent(video, 'pause').pipe(map(() => false)),
)
```

## Représenter un clic avec un Subject

Un `Subject` peut représenter l’intention utilisateur déclenchée par le bouton :

```ts
togglePlay$ = new Subject<void>();
```

Dans le template :

```html
<button type="button" (click)="togglePlay$.next()">Play/Pause</button>
```

## Nettoyer les subscriptions

Avec Angular, vous pouvez utiliser `takeUntilDestroyed()` :

```ts
stream$
  .pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe();
```

Cela évite de garder une subscription active après la destruction du composant.

