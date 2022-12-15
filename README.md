# Flipping Tiles Game

**How to Play it?**
* Simply on this link: https://flipping-tiles-game.web.app/
* My dog, Yoda, just turned 2 years old. Can you find and match all his photos? 
* There are 8 unique pairs of photos of my dog - in total 16 photos.
* The goal of the game is to find the pairs.
* GL HF!

**Description**
* This is a memory game where you flip cards and match the same pairs of my dog.
* A progressive web app (PWA) done in React with CSS animations
* Deployed on Firebase.

**Notes**
* npx create-react-app my-app --template cra-template-pwa 
    * Creates PWA 
* This integrates a tool called Workbox, which automatically caches and optimizes the application as PWA.
* To install PWA on a device, it is required to be served on HTTPS (secured).
* One way how to do this is to deploy the app on Firebase.
* Create account and project on Firebase.
* npm install -g firebase-tools
* firebase login
* firebase init hosting
    * Links to the react project
    * When propted about what dir u want to use as public dir, type: "build". Thats where React compiles the code.
* npm run build
    * Builds react-app (bundles all the code together with webpack)
* firebase deploy
    * code uploaded to Firebase and makes it acccesible on a specified domain.
