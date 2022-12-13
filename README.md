# Flipping Tiles Game

**Description**
* This is a memory game where you flip cards and match the same pairs.
* A progressive web app (PWA) done in React with CSS animations and deployed on Firebase.

**Notes**
* npx create-react-app my-app --template cra-template-pwa 
    * Creates PWA using create-react-app
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
        * code uploaded to Firebase and make it acccesible on a specified domain.