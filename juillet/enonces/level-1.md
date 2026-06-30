# Challenge Angular - Level 1

## Objectif

Créer un composant Angular qui affiche une vidéo HTML5 et permet de la démarrer ou de la mettre en pause.

Ce niveau évalue votre capacité à manipuler un élément du DOM avec Angular, à réagir à des événements utilisateur et à afficher un état simple dans le template.

Le but n’est pas de créer un lecteur vidéo complet. Le but est de produire une fonctionnalité claire, lisible et fonctionnelle.

## Sujet

Vous devez créer un composant qui affiche une vidéo avec les contrôles natifs du navigateur et un bouton Play/Pause personnalisé.

Le bouton doit démarrer la vidéo quand elle est en pause, puis la mettre en pause quand elle est en lecture.

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher une vidéo HTML5.
- Afficher les contrôles natifs de la vidéo.
- Afficher un bouton Play/Pause.
- Démarrer la vidéo avec le bouton.
- Mettre la vidéo en pause avec le bouton.
- Afficher `Play` quand la vidéo est en pause.
- Afficher `Pause` quand la vidéo est en lecture.
- Afficher un message de chargement tant que la vidéo n’est pas prête.
- Désactiver le bouton tant que la vidéo charge.

## Contraintes techniques

Vous devez utiliser :

- Un composant Angular standalone.
- Un élément HTML `<video>`.
- `viewChild()` pour récupérer la vidéo dans le composant TypeScript.
- `signal()` pour stocker l’état de lecture.
- `signal()` pour stocker l’état de chargement.
- Les événements natifs de la vidéo, par exemple `play`, `pause`, `loadstart` et `canplay`.
- La syntaxe `@if`.
- Un bouton HTML avec `(click)`.

## Notions autorisées

Vous pouvez utiliser :

- `signal()`.
- `viewChild()`.
- `ElementRef`.
- Event binding avec `(click)`, `(play)`, `(pause)`, `(loadstart)` et `(canplay)`.
- Property binding avec `[disabled]`.
- Du CSS simple.

## Notions à ne pas utiliser

Pour ce Level 1, vous ne devez pas ajouter :

- Router.
- Service Angular.
- Appel HTTP avec `HttpClient`.
- RxJS.
- Formulaire Angular.
- Tests unitaires obligatoires.
- Librairie de lecteur vidéo.

## Documentation utile

Vous pouvez consulter la documentation MDN de l’élément `<video>` :

https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/video

## Critères d’évaluation

Votre solution sera évaluée sur :

- Le fonctionnement réel du bouton Play/Pause.
- Le bon usage de `viewChild()`.
- Le bon usage des `signal()`.
- La mise à jour correcte du texte du bouton.
- L’affichage correct du chargement.
- La simplicité du template.
- La lisibilité du code TypeScript.
- Le respect du périmètre demandé.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Une mise en page simple et responsive.
- Un message d’erreur si la vidéo ne peut pas être chargée.
- Un style différent quand la vidéo est en lecture.

Le bonus ne doit pas introduire RxJS ni `HttpClient`.

