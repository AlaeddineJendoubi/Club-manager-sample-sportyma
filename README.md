# Club manager sample application

A mini club manager test application using react-native (TS), functional component, hooks, UIKitten, Redux

## Installation

in route directory .

```bash
npm install
cd ios
pod install
```
To run the application 
ios :
```npx react-native run-ios``` 
android :
```npx react-native run-android``` 

## Usage

*English: 
- A user can display the clubs list.
- A user can filter clubs list by season.
- A user can add a new club (write : name, country) select (logo, season).
- A user can display club's players. 
- A user can associate a player to a club.
- A user can display players list.
- A user can access player’s club history.
- A user can display player's statistics, filter by (season and club). 
- 
Recently added
- A user can generate new random club data.
- A user can generate new player data.
- A user can generate player stats.
- A user can save player stats to state.

## Français 
- Un utilisateur peut afficher la liste des clubs.
- Un utilisateur peut filtrer la liste des clubs par saison.
- Un utilisateur peut ajouter un nouveau club (écrire : nom, pays) sélectionner (logo, saison).
- Un utilisateur peut afficher les joueurs du club.
- Un utilisateur peut associer un joueur à un club.
- Un utilisateur peut afficher la liste des joueurs.
- Un utilisateur peut accéder à l'historique du club du joueur.
- Un utilisateur peut afficher les statistiques du joueur, filtrer par (saison et club).
- 
Récemment ajouté
- Un utilisateur peut générer de nouvelles données de club aléatoires.
- Un utilisateur peut générer de nouvelles données de joueur.
- Un utilisateur peut générer des statistiques de joueur.
- Un utilisateur peut enregistrer les statistiques du joueur à l'état.

## Tests
Unit tests where added for utils function : 
To run tests execute ``` npm run test  -- --watch src/utils/  ``` 


## Release
Release : An android APK file is at the root of the directory.

Please note that all the development were made using debug mode (on ios) 

## Screen Shots
- Home screen with clubs list
![Simulator Screen Shot - iPhone 12 - 2021-09-22 at 06 13 06](https://user-images.githubusercontent.com/36207352/134287423-7e85af8a-c809-4a81-b3fc-6d203ba764b8.png)
- [EN] Clicking on a club we enter to it's player's list, where we can also associate new player.
- [FR] En cliquant sur un club, nous entrons dans sa liste de joueurs, où nous pouvons également associer un nouveau joueur
![Simulator Screen Shot - iPhone 12 - 2021-09-22 at 06 13 49](https://user-images.githubusercontent.com/36207352/134288038-3ab14a53-3242-4452-a648-a2b2c25d7421.png)
- [EN] Players list, clicking on a player we can display his club history .
- [FR] Liste des joueurs, en cliquant sur un joueur, nous pouvons afficher son historique. 
![Simulator Screen Shot - iPhone 12 - 2021-09-22 at 06 13 35](https://user-images.githubusercontent.com/36207352/134288011-c32c07db-8447-4ea0-a40e-ced94e0260ab.png)

![Simulator Screen Shot - iPhone 12 - 2021-09-22 at 06 14 24](https://user-images.githubusercontent.com/36207352/134288406-e7b0f4b8-ebfb-427c-a4cb-d760f9a32822.png)
