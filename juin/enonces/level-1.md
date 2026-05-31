# Challenge Angular - Level 1

## Objectif

Créer une première barre de recherche dans une application Angular.

Ce niveau évalue votre capacité à manipuler un champ de formulaire simple, à stocker une valeur dans un état local, puis à afficher une liste filtrée.

Le but n’est pas de créer une architecture complète. Le but est de produire une fonctionnalité claire, lisible et fonctionnelle.

## Sujet

Vous devez créer une page qui affiche une liste de ressources Angular et une barre de recherche.

Quand l’utilisateur saisit du texte, la liste doit se filtrer automatiquement.

## Données

Vous pouvez utiliser un tableau local dans le composant.

Chaque ressource doit contenir au minimum :

- un identifiant,
- un nom,
- une catégorie.

Exemple :

```ts
{
  id: 1,
  name: 'Angular Essentials',
  category: 'Formation'
}
```

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher un titre de page.
- Afficher un champ de recherche.
- Afficher une liste de ressources.
- Filtrer les ressources selon le texte saisi.
- Faire une recherche insensible à la casse.
- Afficher toutes les ressources quand le champ est vide.
- Afficher un message quand aucune ressource ne correspond à la recherche.

## Contraintes techniques

Vous devez utiliser :

- Un composant Angular standalone.
- Des types TypeScript.
- `signal()` pour stocker le texte recherché.
- `computed()` pour calculer la liste filtrée.
- La syntaxe `@if`.
- La syntaxe `@for`.
- Un champ `<input type="search">`.

## Notions autorisées

Vous pouvez utiliser :

- `signal()`.
- `computed()`.
- Event binding avec `(input)`.
- Property binding avec `[value]`.
- Un tableau local de données.
- Du CSS simple.

## Notions à ne pas utiliser

Pour ce Level 1, vous ne devez pas ajouter :

- Router.
- Service Angular.
- Appel HTTP.
- RxJS.
- Formulaire réactif complexe.
- Composant enfant dédié.
- State management global.

## Critères d’évaluation

Votre solution sera évaluée sur :

- Le fonctionnement réel du filtre.
- La lisibilité du code TypeScript.
- La simplicité du template.
- Le bon usage de `signal()` et `computed()`.
- Le respect du périmètre demandé.
- L’affichage correct de l’état “aucun résultat”.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Un placeholder utile dans le champ de recherche.
- Une mise en page responsive simple.
- Un test unitaire qui vérifie le filtrage.

Le bonus ne doit pas transformer l’exercice en architecture plus avancée.
