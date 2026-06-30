# Helper - Level 1

## Documentation utile

L’élément HTML `<video>` permet d’afficher une vidéo dans une page web.

Documentation MDN :

https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/video

## Exemple d’élément vidéo

```html
<video controls width="400">
  <source
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    type="video/mp4"
  />
</video>
```

## Événements utiles

Quelques événements natifs utiles pour cet exercice :

- `loadstart` : le navigateur commence à charger la vidéo.
- `canplay` : la vidéo peut commencer à être lue.
- `play` : la lecture démarre.
- `pause` : la lecture est mise en pause.

## Récupérer la vidéo avec Angular

Vous pouvez placer une référence locale sur l’élément vidéo :

```html
<video #videoRef controls></video>
```

Puis la récupérer dans le composant avec `viewChild()` :

```ts
videoEl = viewChild<ElementRef<HTMLVideoElement>>('videoRef');
```

La méthode `nativeElement` permet ensuite d’accéder à l’élément vidéo.

