# Challenge Angular - Level 3

## Objectif

Créer un composant Angular qui pilote une vidéo HTML5 avec RxJS.

Ce niveau évalue votre capacité à observer des événements DOM avec RxJS, à exposer un état sous forme d’Observable et à séparer les intentions utilisateur des événements réels de la vidéo.

Le but n’est pas de créer un lecteur vidéo complet. Le but est de montrer une gestion réactive propre autour d’un élément `<video>`.

## Sujet

Vous devez créer un composant Angular qui permet :

- d’afficher une vidéo HTML5,
- de démarrer ou mettre en pause la lecture via un bouton,
- de mettre à jour l’état `playing` ou `paused` en observant directement les événements du `<video>`.

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher une vidéo HTML5.
- Afficher les contrôles natifs de la vidéo.
- Afficher un bouton Play/Pause.
- Démarrer la vidéo via le bouton.
- Mettre la vidéo en pause via le bouton.
- Afficher `Play` quand la vidéo est en pause.
- Afficher `Pause` quand la vidéo est en lecture.
- Mettre à jour l’état de lecture depuis les événements réels de la vidéo.

## Contraintes techniques

Vous devez utiliser :

- Un composant Angular standalone.
- `viewChild()` pour récupérer la vidéo.
- `AsyncPipe` pour afficher l’état Observable dans le template.
- `fromEvent(video, 'play')`.
- `fromEvent(video, 'pause')`.
- `merge()` pour fusionner les événements de lecture et de pause.
- Un `Subject` pour le bouton Play/Pause.
- Un état `isPlaying$` sous forme d’Observable, par exemple avec `BehaviorSubject`.
- `takeUntilDestroyed()` pour nettoyer les subscriptions.

## Contraintes importantes

- Ne pas appeler directement `video.play()` dans le template.
- Ne pas appeler directement `video.pause()` dans le template.
- Le bouton doit émettre une intention utilisateur, par exemple avec `togglePlay$.next()`.
- L’état `isPlaying$` doit être mis à jour depuis les événements `play` et `pause` de la vidéo.

## Notions autorisées

Vous pouvez utiliser :

- `fromEvent()`.
- `merge()`.
- `map()`.
- `Subject`.
- `BehaviorSubject`.
- `AsyncPipe`.
- `DestroyRef`.
- `takeUntilDestroyed()`.
- `viewChild()`.
- `ElementRef`.

## Notions à ne pas utiliser

Pour ce Level 3, vous ne devez pas ajouter inutilement :

- Appel HTTP avec `HttpClient`.
- Backend.
- Store externe.
- NgRx.
- Librairie de lecteur vidéo.
- Router.
- Tests unitaires obligatoires.

Le Level 3 doit rester centré sur RxJS et les événements natifs de la vidéo.

## Critères d’évaluation

Votre solution sera évaluée sur :

- Le bon usage de `fromEvent()` pour `play` et `pause`.
- Le bon usage d’un `Subject` pour le bouton.
- L’exposition de l’état avec `isPlaying$`.
- Le bon usage de `AsyncPipe`.
- L’absence d’appel `video.play()` ou `video.pause()` dans le template.
- Le nettoyage correct des subscriptions.
- La lisibilité du flux RxJS.
- Le respect du périmètre demandé.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Un état de chargement avec les événements vidéo.
- Un état d’erreur simple.
- Un indicateur textuel `playing` ou `paused`.

Le bonus ne doit pas introduire de backend ni de store global.

