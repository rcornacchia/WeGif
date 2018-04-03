# WeGif

This React application uses the Giphy API to show trending gifs and 
allow the user to search for gifs. It even keeps track of search history
and caches the data so the gifs can be redisplayed without new API calls!

## Setup

To start first install npm packages with:
```
yarn
```

## Running the App
```
yarn start
```

You should be navigated to localhost:3000 automatically, but can also
navigate there manually.

This application used the following packages:

+ `create-react-app` as a seed.
+ `styled-components` for custom styling
+ `redux` for state management
+ `redux-sagas` to handle asynchronous actions and side effects
+ `Semantic UI` for some pretty components
+ `fetch` (not an npm package, native on most browsers) for http calls

The app is separated into two columns using CSS Grid. The left column is
the history. Each search is presented in the order that it was searched.
If the user clicks on a previous search, that search moves to the top of
the history. A new call is not made, because the data is cached in redux.

The right column includes the search bar and the gifs container. When
a user searches for a gif, an action is dispatched. A redux saga listens
for this action and will first check if that query term has been searched
before. If it hasn't it proceeds to make the call to the Giphy API, and then
caches the data in Redux (as well as adding the search term to history).
That search term is also set in redux as the `current` search term.

When the gif container mounts, an action is dispatched to fetch trending gifs.
This payload is cached under the term `trending` in an object saved in Redux.