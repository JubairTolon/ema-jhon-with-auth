/* 
* 1. create a new project in console.google.com 
* 2. npm install firebase
* 3. create firebase.init.js and import getAuth and export auth;
* 4. firebase settings > Authentication > enable email and pass auth and save
* 5. create login signup component,style, setup route
* 6. attach from filed handler & form submit handler
* 7. npm install --save react-firebase-hooks
* 8. useCreateUserWithEmailAndPassword(auth); from react-firebase-hooks and navigate ro shop
* 9. if user creacted redirect to the aspected page
* 10. useSignInWithEmailAndPassword(auth); for sign In
* 11. create RequireAuth component and set it, make required inventory from App.js, set "from" that from where we came to login, and set this condition
    if (user) {
        navigate(from, { replace: true });
    }
    , create signout button. 
* 12. Implement SignOut button on Header and Create a shipment form at shipment component
* 13. 
*/


/* 
* hosting steps
1. npm install -g firebase-tools 
2. firebase login
3. firebase init
4. firebase deploy
*/