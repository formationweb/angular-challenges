# Helper - Level 2

## Tester les événements vidéo

Dans un test unitaire, vous pouvez récupérer l’élément `<video>` depuis le DOM du fixture :

```ts
const video = fixture.nativeElement.querySelector('video') as HTMLVideoElement;
```

Vous pouvez ensuite déclencher un événement natif :

```ts
video.dispatchEvent(new Event('canplay'));
fixture.detectChanges();
```

Le même principe fonctionne avec :

- `loadstart`
- `canplay`
- `play`
- `pause`

## Tester le texte affiché

Pour vérifier le rendu du composant :

```ts
const compiled = fixture.nativeElement as HTMLElement;

expect(compiled.textContent).toContain('Chargement de la vidéo...');
```

## Tester `play()` et `pause()`

Dans l’environnement de test, les méthodes natives de lecture vidéo ne lisent pas réellement une vidéo.

Vous pouvez les remplacer par des mocks simples :

```ts
video.play = vi.fn(() => Promise.resolve());
video.pause = vi.fn();
```

Cela permet de vérifier qu’un clic sur le bouton appelle bien la bonne méthode.

