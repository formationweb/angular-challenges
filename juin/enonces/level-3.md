# Challenge Angular - Level 3

## Objectif

Faire évoluer la recherche du Level 2 vers une fonctionnalité robuste, réutilisable et testable.

Ce niveau évalue votre capacité à créer un composant de recherche réutilisable, à gérer un debounce, à synchroniser un état avec l’URL et à couvrir les comportements principaux avec des tests.

Le but n’est pas de créer une application complexe. Le but est de montrer que vous savez transformer une fonctionnalité simple en composant exploitable dans un vrai projet Angular.

## Sujet

Reprendre la page de recherche du Level 2.

Vous devez maintenant ajouter :

- un composant de recherche réutilisable,
- un debounce avant d’appliquer la recherche,
- une synchronisation avec l’URL,
- un filtre complémentaire,
- un tri,
- des états de chargement et d’erreur simulés,
- des tests unitaires ciblés.

## Données

Vous pouvez garder un tableau local de ressources.

Chaque ressource doit contenir au minimum :

- un identifiant,
- un nom,
- une catégorie,
- une description,
- un statut.

Exemple :

```ts
{
  id: 1,
  name: 'Angular Essentials',
  category: 'Formation',
  description: 'Les bases modernes des composants Angular.',
  status: 'Disponible'
}
```

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher une barre de recherche réutilisable.
- Rechercher dans plusieurs champs.
- Appliquer un debounce de 300 ms avant la recherche.
- Synchroniser la recherche avec le query param `q`.
- Initialiser le champ depuis l’URL, par exemple `?q=signals`.
- Vider la recherche.
- Filtrer les résultats par catégorie.
- Trier les résultats par nom.
- Afficher le nombre de résultats.
- Afficher un état de chargement simulé.
- Afficher un état d’erreur simulé.
- Permettre de relancer le chargement après une erreur simulée.
- Afficher un état “aucun résultat”.

## Composant réutilisable attendu

Vous devez créer un composant dédié à la saisie de recherche, par exemple :

```ts
SearchBox
```

Ce composant doit recevoir des données avec `input()` et communiquer avec le parent avec `output()`.

Exemples d’entrées possibles :

```ts
query
label
placeholder
debounceMs
```

Exemple de sortie possible :

```ts
queryChange
```

Les noms exacts sont libres, mais l’intention doit être claire.

## Contraintes techniques

Vous devez utiliser :

- Des composants standalone.
- `input()`.
- `output()`.
- `signal()`.
- `computed()`.
- `inject()`.
- Le router Angular pour lire et écrire le query param.
- Des types TypeScript.
- La syntaxe `@if`.
- La syntaxe `@for`.
- Des tests unitaires.

## Tests unitaires attendus

Vous devez ajouter des tests qui vérifient au minimum :

- Le debounce du composant de recherche.
- L’émission d’un événement quand la recherche change.
- Le reset de la recherche.
- Le filtrage des résultats.
- L’état “aucun résultat”.
- L’initialisation depuis le query param `q`.

Exemples de cas à tester :

- Quand l’utilisateur saisit `signals`, l’événement n’est pas émis avant 300 ms.
- Quand le champ est vidé, la recherche redevient vide.
- Quand l’URL contient `?q=signals`, le champ est initialisé avec `signals`.
- Quand une catégorie est sélectionnée, seuls les résultats de cette catégorie sont affichés.
- Quand une recherche ne correspond à rien, l’état vide est visible.

## Notions autorisées

Vous pouvez utiliser :

- Router Angular.
- Query params.
- `setTimeout()` pour simuler le debounce ou le chargement.
- Tests avec timers simulés.
- Composants enfants.
- `input()` et `output()`.
- `signal()` et `computed()`.

## Notions à ne pas utiliser

Pour ce Level 3, vous ne devez pas ajouter inutilement :

- Appel HTTP réel.
- Backend.
- Store externe.
- NgRx.
- Librairie de recherche.
- Librairie de debounce.
- Authentification.
- Guards ou resolvers.

Le Level 3 doit rester centré sur la qualité d’un composant de recherche Angular.

## Critères d’évaluation

Votre solution sera évaluée sur :

- La réutilisabilité du composant de recherche.
- La bonne utilisation de `input()` et `output()`.
- La synchronisation correcte avec l’URL.
- Le fonctionnement du debounce.
- La clarté des filtres et du tri.
- La gestion propre des états chargement, erreur, vide et résultats.
- La qualité du typage TypeScript.
- La pertinence des tests unitaires.
- Le respect du périmètre demandé.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Une recherche qui ignore les accents.
- Un bouton pour réinitialiser tous les filtres.
- Un message de résumé plus détaillé.
- Un test sur le tri.
- Un test sur le filtre de catégorie.

Le bonus ne doit pas transformer l’exercice en moteur de recherche complet.
