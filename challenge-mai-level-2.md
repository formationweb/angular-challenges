# Challenge Angular - Level 2

## Objectif

Créer un mini-jeu Angular avec un personnage animé dans un canvas.

Ce niveau évalue votre capacité à structurer une fonctionnalité Angular avec plusieurs composants, à faire communiquer un composant parent et un composant enfant, et à manipuler un élément du DOM de manière contrôlée avec Angular.

Le but n’est pas encore de créer une architecture complète de moteur de jeu. Le but est de montrer que vous maîtrisez les patterns Angular intermédiaires utiles dans une application réelle.

## Sujet

Créer un jeu où un personnage se déplace dans un canvas.

Le personnage doit être affiché à partir d’un spritesheet 4x4 placé dans le dossier `public`.

Le spritesheet contient 4 lignes :

- Ligne 1 : bas
- Ligne 2 : gauche
- Ligne 3 : haut
- Ligne 4 : droite

Chaque ligne contient 4 images d’animation.

## Fonctionnalités attendues

L’application doit permettre de :

- Afficher un canvas.
- Afficher le personnage dans le canvas.
- Déplacer le personnage avec les flèches du clavier.
- Déplacer le personnage avec les touches `ZQSD`.
- Changer la direction visuelle du personnage selon le déplacement.
- Changer la frame du spritesheet pour simuler une animation.
- Empêcher le personnage de sortir du canvas.
- Afficher dans le parent la position actuelle du personnage.
- Afficher dans le parent la direction actuelle du personnage.
- Modifier la vitesse du personnage depuis le parent.
- Réinitialiser la position du personnage depuis le parent.

## Découpage attendu

Vous devez au minimum créer deux composants :

- Un composant parent.
- Un composant enfant pour le canvas.

Le composant parent est responsable de :

- Afficher le titre du jeu.
- Afficher les informations du joueur.
- Définir les paramètres simples du jeu, comme le nom du joueur ou la vitesse.
- Déclencher la réinitialisation.
- Recevoir les informations envoyées par le composant canvas.

Le composant canvas est responsable de :

- Afficher le `<canvas>`.
- Charger le spritesheet.
- Dessiner le personnage.
- Gérer le déplacement au clavier.
- Limiter le déplacement aux bords du canvas.
- Envoyer la position du joueur au parent.

## Contraintes techniques

Vous devez utiliser les pratiques Angular modernes.

Vous devez utiliser :

- Des composants standalone.
- `input()` pour passer des données du parent vers l’enfant.
- `output()` pour envoyer des données de l’enfant vers le parent.
- `viewChild()` pour récupérer le canvas.
- `effect()` pour redessiner le canvas quand l’état change.
- Des signals avec `signal()`.
- Des interfaces ou types TypeScript pour représenter le joueur et sa position.
- Le binding Angular dans les templates.
- Des styles encapsulés dans les fichiers CSS des composants.

## Notions autorisées

Vous pouvez utiliser :

- `input()`.
- `output()`.
- `viewChild()`.
- `effect()`.
- `signal()`.
- `@if` si nécessaire.
- `@for` si nécessaire.
- Les événements clavier.
- Les interfaces TypeScript.
- Les union types TypeScript.

## Notions à ne pas utiliser

Pour ce Level 2, vous ne devez pas encore utiliser :

- Un router avec lazy-loading.
- Des guards.
- Des resolvers.
- Une architecture complète de moteur de jeu.
- Un state management global complexe.
- Des services spécialisés pour chaque partie du jeu.
- RxJS avancé.
- Injection tokens.
- Optimisation avancée de change detection.

Ces notions seront abordées dans le Level 3.

## Exemple de comportement attendu

Au lancement :

- Le canvas est affiché.
- Le personnage est placé au centre ou à une position de départ définie.
- Le parent affiche la position initiale du personnage.

Quand l’utilisateur appuie sur `Flèche droite` ou `D` :

- Le personnage se déplace vers la droite.
- La ligne du spritesheet correspondant à la droite est utilisée.
- La frame d’animation change.
- Le parent reçoit la nouvelle position.

Quand l’utilisateur appuie plusieurs fois vers un bord :

- Le personnage s’arrête au bord du canvas.
- Il ne sort pas de la zone de jeu.

Quand l’utilisateur clique sur `Reset` :

- Le personnage revient à sa position initiale.
- Le parent affiche la position réinitialisée.

## Critères d’évaluation

Votre solution sera évaluée sur :

- La séparation claire entre composant parent et composant enfant.
- La bonne utilisation de `input()`.
- La bonne utilisation de `output()`.
- La bonne utilisation de `viewChild()`.
- La bonne utilisation de `effect()`.
- La gestion correcte des signals.
- La lisibilité du TypeScript.
- Le bon découpage des responsabilités.
- Le respect des limites du canvas.
- La bonne utilisation du spritesheet.
- Le respect du périmètre Level 2.

## Bonus possible

Si tout fonctionne correctement, vous pouvez ajouter :

- Une sélection de vitesse.
- Un nom de joueur configurable.
- Un compteur de déplacements.
- Un affichage plus propre de la direction.
- Une grille légère dessinée dans le canvas.

Le bonus ne doit pas transformer l’exercice en architecture Level 3.
