# bet-slip-app
Code challenge of a bets-slip web application where the user can add or remove a selection from a table of events.

![image](https://user-images.githubusercontent.com/33798495/167214882-738f6a6b-c632-4b03-a106-12d2c970e8f7.png)


### Requirements
To run this project locally you should have all these requirements.
- node.js v14.18.1
- yarn v1.22.15 
- create an .env.local file on the project rootDir and put the variable VITE_SERVER_API_URL with the api url used 

### Installation and Startup
> Install dependencies
```
yarn install
```

> Run the project on dev mode
```
yarn dev --host
```

> Run the app tests, the current coverage is 95%
```
yarn test:coverage
```

> Build the project
```
yarn build
```

Then you can put the dist folder on a server to serve the web app :)

### Choices
PACKAGE BUNDLER: Vite
> I used vite as javascript bundler because in terms of speed is faster than webpack, leverage the rollup speed and allows to the developers work only in the features instead on the bundle configuration

STATE MANAGEMENT: Redux
> I used redux, redux thunk and redux-ducks pattern to handle the app state management because the company stack include that and also to find the business logic only on one file.

CSS FRAMEWORK: Material UI
> A choice based on the company stack and for time reasons.

JEST & TYPESCRIPT:
> The project was build in Typescript to leverage the static types and write more readable code that you can easily edit with the ts autocomplete help.
> The test layer was build in Jest because it allows more readability in the test files, and allow libraries such @testing-library/react run correctly.
