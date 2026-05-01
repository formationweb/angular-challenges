# Aide Canvas - Level 2

Ce dossier contient une aide pour comprendre comment dessiner un personnage dans un canvas à partir d’un spritesheet.

Cette aide ne donne pas la structure Angular de la solution. Elle explique seulement les notions utiles côté canvas.

## Fichier fourni

Le fichier `character.png` est un spritesheet de 1024 x 1024 pixels.

Il est organisé en 4 colonnes et 4 lignes.

Les lignes correspondent aux directions :

- Ligne 1 : bas
- Ligne 2 : gauche
- Ligne 3 : haut
- Ligne 4 : droite

Chaque ligne contient 4 images d’animation.

## Taille d’une frame

Comme le spritesheet fait 4 colonnes et 4 lignes :

```ts
const columns = 4;
const rows = 4;

const frameWidth = image.width / columns;
const frameHeight = image.height / rows;
```

Avec l’image fournie, chaque frame mesure :

```ts
1024 / 4 = 256
```

Donc une frame fait 256 x 256 pixels.

## Charger une image en JavaScript

Pour dessiner une image dans un canvas, il faut d’abord la charger.

```ts
const image = new Image();

image.src = '/character.png';

image.onload = () => {
  // L’image est prête.
  // Le dessin peut commencer ici.
};
```

Il ne faut pas dessiner le spritesheet avant que l’image soit chargée.

## Récupérer le contexte du canvas

Pour dessiner dans un canvas, il faut récupérer son contexte 2D.

```ts
const context = canvas.getContext('2d');

if (!context) {
  return;
}
```

Le contexte est l’objet qui permet d’appeler les méthodes de dessin.

## Nettoyer le canvas

Avant de redessiner une nouvelle position du personnage, il faut effacer l’ancien dessin.

```ts
context.clearRect(0, 0, canvas.width, canvas.height);
```

On peut ensuite dessiner un fond simple :

```ts
context.fillStyle = '#eef4ec';
context.fillRect(0, 0, canvas.width, canvas.height);
```

## Sélectionner une frame dans le spritesheet

Pour dessiner une seule image du spritesheet, il faut choisir :

- la colonne de l’animation,
- la ligne de la direction.

Exemple :

```ts
const frame = 0;
const directionRow = 0;

const sourceX = frame * frameWidth;
const sourceY = directionRow * frameHeight;
```

Si `frame = 2`, on prend la troisième colonne.

Si `directionRow = 1`, on prend la deuxième ligne.

## Correspondance des directions

Vous pouvez représenter les directions avec des nombres de ligne :

```ts
const directionRows = {
  down: 0,
  left: 1,
  up: 2,
  right: 3,
};
```

Attention : les index commencent à 0.

Donc :

- `0` correspond à la première ligne.
- `1` correspond à la deuxième ligne.
- `2` correspond à la troisième ligne.
- `3` correspond à la quatrième ligne.

## Dessiner une frame

La méthode `drawImage()` permet de dessiner une partie précise d’une image.

```ts
context.drawImage(
  image,
  sourceX,
  sourceY,
  frameWidth,
  frameHeight,
  destinationX,
  destinationY,
  destinationWidth,
  destinationHeight,
);
```

Les 4 premiers paramètres après `image` indiquent la zone à prendre dans le spritesheet :

- `sourceX`
- `sourceY`
- `frameWidth`
- `frameHeight`

Les 4 derniers paramètres indiquent où dessiner cette frame dans le canvas :

- `destinationX`
- `destinationY`
- `destinationWidth`
- `destinationHeight`

## Exemple indépendant d’Angular

Cet exemple montre seulement le principe du dessin canvas.

```ts
function drawCharacter(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  x: number,
  y: number,
  directionRow: number,
  frame: number,
): void {
  const context = canvas.getContext('2d');

  if (!context) {
    return;
  }

  const frameWidth = image.width / 4;
  const frameHeight = image.height / 4;
  const sourceX = frame * frameWidth;
  const sourceY = directionRow * frameHeight;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#eef4ec';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.drawImage(
    image,
    sourceX,
    sourceY,
    frameWidth,
    frameHeight,
    x,
    y,
    64,
    64,
  );
}
```

## Limiter le personnage au canvas

Pour éviter que le personnage sorte du canvas, on peut limiter ses coordonnées.

```ts
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
```

Exemple :

```ts
x = clamp(x, 0, canvas.width - characterSize);
y = clamp(y, 0, canvas.height - characterSize);
```

## Animation simple

Pour passer à la frame suivante :

```ts
frame = (frame + 1) % 4;
```

Quand `frame` arrive à 3, la valeur suivante revient à 0.

## Utiliser KeyboardEvent

Un `KeyboardEvent` représente une action clavier.

La propriété la plus utile ici est `key`.

```ts
function handleKey(event: KeyboardEvent): void {
  console.log(event.key);
}
```

Quelques valeurs possibles :

- `ArrowUp`
- `ArrowDown`
- `ArrowLeft`
- `ArrowRight`
- `z`
- `q`
- `s`
- `d`

Pour comparer plus facilement les touches, vous pouvez convertir la valeur en minuscule.

```ts
const key = event.key.toLowerCase();
```

Exemple de conversion d’une touche en direction :

```ts
function getDirectionFromKey(key: string): string | null {
  const normalizedKey = key.toLowerCase();

  if (normalizedKey === 'arrowup' || normalizedKey === 'z') {
    return 'up';
  }

  if (normalizedKey === 'arrowdown' || normalizedKey === 's') {
    return 'down';
  }

  if (normalizedKey === 'arrowleft' || normalizedKey === 'q') {
    return 'left';
  }

  if (normalizedKey === 'arrowright' || normalizedKey === 'd') {
    return 'right';
  }

  return null;
}
```

Quand une touche sert à déplacer le joueur, vous pouvez empêcher le comportement par défaut du navigateur.

```ts
event.preventDefault();
```

C’est utile pour éviter que les flèches du clavier fassent défiler la page.

## Points à retenir

- Un canvas se dessine avec un contexte 2D.
- Une image doit être chargée avant d’être dessinée.
- Un spritesheet se découpe avec `sourceX`, `sourceY`, `frameWidth` et `frameHeight`.
- `drawImage()` peut dessiner une seule partie d’une image.
- Il faut effacer le canvas avant de redessiner.
- Il faut limiter les coordonnées pour rester dans la zone de jeu.
- `KeyboardEvent.key` permet de savoir quelle touche a été utilisée.
- `event.preventDefault()` évite certains comportements automatiques du navigateur.
