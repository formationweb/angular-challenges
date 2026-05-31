# Challenge Angular - Level 2

## Objectif

Faire évoluer la recherche du Level 1 vers une interface mieux structurée.

Ce niveau évalue votre capacité à organiser une fonctionnalité dans un composant dédié, à enrichir les critères de recherche et à gérer plusieurs états d’affichage.

Le but est de rendre la fonctionnalité plus proche d’un usage réel, sans ajouter de backend.

## Sujet

Reprendre la barre de recherche du Level 1.

Vous devez maintenant créer une page de recherche plus complète, avec une recherche sur plusieurs champs, un bouton pour vider la recherche, un compteur de résultats et des états d’interface plus précis.

## Données

Vous devez utiliser un tableau local de ressources.

Chaque ressource doit contenir au minimum :

- un identifiant,
- un nom,
- une catégorie,
- une description.

Exemple :

```ts
{
  id: 1,
  name: 'Angular Essentials',
  category: 'Formation',
  description: 'Les bases modernes des composants Angular.'
}
```

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher une page de recherche dédiée.
- Rechercher dans le nom de la ressource.
- Rechercher dans la catégorie.
- Rechercher dans la description.
- Afficher le nombre de résultats.
- Vider la recherche avec un bouton.
- Désactiver le bouton de reset quand la recherche est vide.
- Afficher un état initial quand aucune recherche n’est saisie.
- Afficher un état “aucun résultat” quand une recherche ne correspond à rien.

## Organisation attendue

La logique de recherche ne doit plus rester directement dans le composant racine.

Vous devez créer un composant dédié, par exemple :

```ts
SearchPage
```

Le composant racine peut simplement afficher ce composant.

## Contraintes techniques

Vous devez utiliser :

- Des composants standalone.
- `signal()` pour le texte recherché.
- `computed()` pour les données dérivées.
- La syntaxe `@if`.
- La syntaxe `@for`.
- Des types TypeScript.
- Un template accessible avec un label lié au champ de recherche.
- Au moins un test unitaire sur la recherche ou le reset.

## Tests unitaires attendus

Vous devez ajouter des tests qui vérifient au minimum :

- Une recherche sur le nom.
- Une recherche sur la catégorie ou la description.
- Le bouton reset.
- L’état “aucun résultat”.

## Notions autorisées

Vous pouvez utiliser :

- Composants Angular.
- `signal()`.
- `computed()`.
- `input()` et `output()` si vous souhaitez découper davantage.
- Tests avec `TestBed`.
- CSS responsive simple.

## Notions à ne pas utiliser

Pour ce Level 2, vous ne devez pas ajouter inutilement :

- Appel HTTP.
- Router avec query params.
- Debounce.
- Service global.
- Store externe.
- Librairie de composants.

Le Level 2 doit rester centré sur la structuration et les états d’interface.

## Critères d’évaluation

Votre solution sera évaluée sur :

- La séparation claire entre le composant racine et la page de recherche.
- La recherche sur plusieurs champs.
- La lisibilité du code.
- Le bon usage des signals.
- La qualité des états affichés.
- L’accessibilité minimale du champ de recherche.
- La pertinence des tests.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Un compteur qui distingue le total et les résultats filtrés.
- Une recherche qui ignore les espaces inutiles.
- Une petite amélioration visuelle des cartes de résultats.
