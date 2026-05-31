# Challenge Angular - Level 3

## Objectif

Faire évoluer le mini-jeu du Level 2 en ajoutant une meilleure séparation des responsabilités.

Ce niveau évalue votre capacité à sortir la logique métier d’un composant Angular, à la placer dans un service injectable, puis à écrire des tests unitaires sur cette logique.

Le but n’est pas de créer une architecture complexe. Le but est de montrer que vous savez rendre une fonctionnalité plus maintenable et plus testable.

## Sujet

Reprendre le jeu du Level 2 :

- un canvas,
- un personnage animé avec un spritesheet 4x4,
- un déplacement au clavier,
- une communication entre le parent et le composant canvas.

Puis ajouter une architecture avec service et tests unitaires.

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher un canvas.
- Afficher le personnage dans le canvas.
- Déplacer le personnage avec les flèches du clavier.
- Déplacer le personnage avec les touches `ZQSD`.
- Changer la direction visuelle du personnage selon le déplacement.
- Animer le personnage avec les frames du spritesheet.
- Empêcher le personnage de sortir du canvas.
- Modifier la vitesse du personnage.
- Réinitialiser la position du personnage.
- Afficher la position actuelle du personnage.
- Afficher la direction actuelle du personnage.

## Ajout principal du Level 3

La logique de jeu ne doit plus être entièrement dans le composant canvas.

Vous devez créer un service Angular, par exemple :

```ts
GameStateService
```

Ce service doit gérer la logique métier du jeu.

## Responsabilités du service

Le service doit gérer au minimum :

- L’état du joueur.
- La position du joueur.
- La direction du joueur.
- La vitesse du joueur.
- Le déplacement du joueur.
- La limitation du joueur aux bords du canvas.
- La réinitialisation du joueur.
- La conversion d’une touche clavier en direction.

Exemples de méthodes possibles :

```ts
move(direction)
setSpeed(speed)
reset()
getDirectionFromKey(key)
```

Les noms exacts sont libres, mais les responsabilités doivent être claires.

## Responsabilités du composant canvas

Le composant canvas doit rester responsable de l’affichage.

Il peut gérer :

- Le `<canvas>`.
- Le chargement du spritesheet.
- Le dessin du fond.
- Le dessin du personnage.
- L’écoute du clavier.

Il ne doit plus contenir toute la logique de déplacement.

Quand une touche est utilisée, le composant doit demander au service de mettre à jour l’état du joueur.

## Responsabilités du composant parent

Le composant parent peut gérer :

- Le titre du jeu.
- Le nom du joueur.
- La sélection de vitesse.
- Le bouton reset.
- L’affichage de la position du joueur.
- L’affichage de la direction du joueur.

## Contraintes techniques

Vous devez utiliser :

- Des composants standalone.
- `input()`.
- `viewChild()`.
- `effect()`.
- Des signals avec `signal()`.
- Au moins un `computed()` dans le service ou dans le parent.
- Un service Angular injectable.
- L’injection de dépendance avec `inject()` ou le constructeur.
- Des interfaces ou types TypeScript.
- Des tests unitaires.

## Tests unitaires attendus

Vous devez ajouter des tests sur la logique du service.

Les tests doivent vérifier au minimum :

- Le déplacement du joueur.
- La direction du joueur après un déplacement.
- Le blocage du joueur aux limites du canvas.
- Le changement de vitesse.
- La réinitialisation de la position.
- La conversion des touches clavier en direction.

Exemples de cas à tester :

- Quand le joueur va à droite, sa position `x` augmente.
- Quand le joueur va vers le haut plusieurs fois, il ne sort pas du canvas.
- Quand la vitesse change, le déplacement utilise la nouvelle vitesse.
- Quand on appelle `reset()`, le joueur revient à sa position initiale.
- La touche `ArrowUp` correspond à la direction `up`.
- La touche `q` correspond à la direction `left`.
- Une touche inconnue ne correspond à aucune direction.

## Notions autorisées

Vous pouvez utiliser :

- Services Angular.
- Dependency injection.
- `signal()`.
- `computed()`.
- `input()`.
- `output()` si vous gardez une communication enfant vers parent.
- `viewChild()`.
- `effect()`.
- Tests avec `TestBed`.
- Tests unitaires simples sur une classe de service.

## Notions à ne pas utiliser

Pour ce Level 3, vous ne devez pas ajouter inutilement :

- Router avec lazy-loading.
- Guards.
- Resolvers.
- State management global complexe.
- RxJS avancé.
- Injection tokens.
- Moteur de jeu complet.
- Système de niveaux complexe.
- Ennemis ou IA.

Le Level 3 doit rester proche du Level 2, avec une amélioration claire : service + tests.

## Critères d’évaluation

Votre solution sera évaluée sur :

- La séparation entre logique métier et rendu canvas.
- La bonne utilisation d’un service Angular.
- La bonne utilisation de l’injection de dépendance.
- La qualité du typage TypeScript.
- La lisibilité du composant canvas.
- La lisibilité du service.
- La pertinence des tests unitaires.
- La couverture des cas principaux de déplacement.
- Le respect du périmètre demandé.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Un compteur de déplacements dans le service.
- Un `computed()` pour afficher un résumé du joueur.
- Un test supplémentaire sur l’animation des frames.
- Une méthode dédiée pour savoir si le joueur est au bord du canvas.

Le bonus ne doit pas transformer l’exercice en architecture complexe.
