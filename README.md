#Netflix-gpt

- create react app[npx create-react-app netflix-gpt]
- configured TailwindCSS
- Header
- Routing of App
- Login Form
- sign up form
- form validation
- useRef hook
  -FireBase setup
  -Deployed the app to the production
  -create sign up user account
  -Implement sign In user api
  -created redux store with userslice
  -implemented sign out
  -update profile
- implemented sign out
  -update profile api call
  -Bugfix: sign up user displayName and profile picture update
  -Bugfix: if the user is not logged in redirect/browse to login Page and vice-verse
  -unsubcribed to the onAuthStateChanged callback
  -add hardcore values to the condtants file
- fetch movies from TMDB movies
  -Register TMDB API & create an app & get Access Token
  -Get data from Tmdb now playing movies list API

- #Features

- Login/Sign Up
  -Sign In/ Sign up Form
  -redirect to browse page
  -Browse page(after authencation)
  -Header
  -main Movie
  -Tailor in Background
  -Title &Description
  -Movies suggestions
  -Movies list -

-NetflixGPT
-search bar
-movie suggestions

--> Routing

--> Formik library is good when we use forms inside a react project
--> useRef hook
--> for authentication we need back-end and we are using firebase to handle this project backend work

npm i -D react-router-dom
in the firebase
-create a new project
-npm install firebase
==> steps for deployment

to install firebase CLI-npm install -g firebase-tools
1.-firebase login
2.-firebase init

3.-firebase deploy
-npm run build

=====================
====> go through how to build store in redux.
===> go through reducers in redux
===> redux dev tools
===>Auth
===> useEffect is used only when u want to use that only once in the component
==> the name of the hook is always start with "use"
