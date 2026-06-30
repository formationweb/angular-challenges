# Challenge Angular - Level 2

## Objectif

Reprendre le composant vidéo du Level 1 et ajouter des tests unitaires.

Ce niveau évalue votre capacité à tester une interaction Angular simple : événements du template, état du composant et rendu conditionnel.

Le but n’est pas de complexifier la fonctionnalité. Le but est de vérifier que le comportement principal est couvert par des tests.

## Sujet

Vous devez créer le même composant vidéo que dans le Level 1 :

- une vidéo HTML5,
- un bouton Play/Pause,
- un état de lecture,
- un état de chargement.

Vous devez ensuite écrire des tests unitaires qui valident les comportements principaux.

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher une vidéo HTML5.
- Afficher les contrôles natifs de la vidéo.
- Afficher un message de chargement tant que la vidéo n’est pas prête.
- Masquer le message de chargement quand la vidéo peut être lue.
- Désactiver le bouton tant que la vidéo charge.
- Démarrer et mettre en pause la vidéo via un bouton.
- Mettre à jour le texte du bouton selon l’état de lecture.

## Contraintes techniques

Vous devez utiliser :

- Un composant Angular standalone.
- Un élément HTML `<video>`.
- `viewChild()` pour récupérer la vidéo dans le composant TypeScript.
- `signal()` pour l’état de lecture.
- `signal()` pour l’état de chargement.
- La syntaxe `@if`.
- Des tests unitaires avec `TestBed`.

## Tests unitaires attendus

Vous devez ajouter des tests qui vérifient au minimum :

- Le composant est créé.
- Le message de chargement est affiché quand `isLoading` vaut `true`.
- Le message de chargement disparaît après l’événement `canplay`.
- L’état `isPlaying` passe à `true` après l’événement `play`.
- L’état `isPlaying` passe à `false` après l’événement `pause`.
- Le bouton affiche `Play` quand la vidéo est en pause.
- Le bouton affiche `Pause` quand la vidéo est en lecture.

## Notions autorisées

Vous pouvez utiliser :

- `signal()`.
- `viewChild()`.
- `ElementRef`.
- Event binding.
- Property binding.
- `TestBed`.
- `fixture.detectChanges()`.
- `dispatchEvent(new Event(...))`.
- Des mocks simples pour `video.play()` et `video.pause()`.

## Notions à ne pas utiliser

Pour ce Level 2, vous ne devez pas ajouter inutilement :

- Router.
- Service Angular.
- Appel HTTP avec `HttpClient`.
- RxJS.
- Store externe.
- Librairie de lecteur vidéo.
- Tests end-to-end.

Le Level 2 doit rester centré sur les tests unitaires d’un composant simple.

## Critères d’évaluation

Votre solution sera évaluée sur :

- Le fonctionnement réel du composant.
- La qualité des tests unitaires.
- La lisibilité du code TypeScript.
- La simplicité du template.
- Le bon usage de `viewChild()`.
- Le bon usage des `signal()`.
- Le respect du périmètre demandé.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Un test sur le clic du bouton Play.
- Un test sur le clic du bouton Pause.
- Un état d’erreur simple si la vidéo échoue à charger.

Le bonus ne doit pas transformer l’exercice en lecteur vidéo complet.

