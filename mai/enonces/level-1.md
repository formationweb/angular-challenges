# Challenge Angular - Level 1

## Objectif

Créer un mini-jeu très simple avec Angular pour valider les bases du framework.

Le but n’est pas de créer un jeu complexe. Le but est de montrer que vous savez créer un composant Angular, afficher des données dans un template, réagir à des clics utilisateur et modifier un état simple.

## Sujet

Créer un jeu où un personnage se déplace dans une grille de 5 cases par 5 cases.

Le personnage commence au centre de la grille. L’utilisateur peut le déplacer avec quatre boutons :

- Haut
- Bas
- Gauche
- Droite

Le personnage ne doit jamais sortir de la grille.

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher une grille de 25 cases.
- Afficher le personnage dans une seule case.
- Déplacer le personnage avec des boutons.
- Empêcher le personnage de sortir de la grille.
- Afficher la position actuelle du personnage.
- Afficher un message quand le personnage arrive dans un coin.
- Réinitialiser la position du personnage au centre de la grille.

## Contraintes techniques

Vous devez utiliser Angular pour construire l’interface.

À ce niveau, l’exercice doit rester simple. Vous devez utiliser :

- Un composant Angular.
- Un template HTML.
- Un fichier de style CSS.
- L’interpolation avec `{{ }}`.
- Le property binding, par exemple `[class.active]`.
- L’event binding, par exemple `(click)`.
- Les signals avec `signal()`.
- La mise à jour d’un signal avec `.set()` ou `.update()`.
- La boucle de template `@for`.
- La condition de template `@if`.
- Du TypeScript simple.

## Notions à ne pas utiliser

Pour ce Level 1, vous ne devez pas utiliser :

- Canvas.
- `input()`.
- `output()`.
- `viewChild()`.
- `effect()`.
- Services Angular.
- Router Angular.
- Pipes personnalisés.
- Formulaires Angular.
- RxJS.
- Lifecycle hooks.

Ces notions seront abordées dans les niveaux suivants.

## Exemple de comportement attendu

Au lancement :

- La grille 5x5 est affichée.
- Le personnage est placé au centre.
- La position affichée est ligne 3, colonne 3.

Quand l’utilisateur clique sur `Haut` :

- Le personnage monte d’une case.
- La position affichée est mise à jour.

Quand l’utilisateur clique plusieurs fois sur `Haut` :

- Le personnage s’arrête à la première ligne.
- Il ne sort pas de la grille.

Quand le personnage arrive dans un coin :

- Un message indique que le personnage est dans un coin.

## Critères d’évaluation

Votre solution sera évaluée sur :

- La bonne utilisation d’un composant Angular.
- La clarté du template.
- La bonne utilisation des bindings Angular.
- La bonne utilisation des signals.
- La simplicité de la logique TypeScript.
- La lisibilité du code.
- Le respect des contraintes du Level 1.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Une couleur différente pour la case du joueur.
- Une couleur différente quand le joueur est dans un coin.
- Un compteur de déplacements.
- Un bouton pour remettre le compteur à zéro.

Le bonus ne doit pas introduire de notions des niveaux supérieurs.
