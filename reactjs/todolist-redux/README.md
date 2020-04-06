# TODO LIST WITH REDUX

## Add redux
- yarn add redux
- yarn add react-redux (connect react with redux together)

## Chia kiến trúc redux dựa vào feature

### create folder redux/
- create file redux/types.js (define actions creators).
- create file redux/actions.js (define actions type)
- create file redux/reducers.js (define reduders of the feature)

### Define actions types.

- please create 1 variable CONSTANT to distinguish

### Define actions.

- define the actions of feature.
- it's always return an object.
- The object has only 2 key: type & payload (data).

### Define reducers

1. always create an initialState.

2. create a condition switch / case to check actions types.

3. The reducers are always received 2 params: state & action.

- state: it's an initial state.

- action: it's an object. The object has 2 key: type & payload


## Create & Configure store for the apps

1. import reducers of feature that public out store redux.
2. We use "combineReducers" to combine all reducers together.
3. We use "createStore" to create store for app use.
4. export the store to app use. (global store)
5. Must import to index.js file.

Refer:  config redux using with react
https://redux.js.org/basics/usage-with-react#passing-the-store


## Create redux devtools to tracking store of app

1. Install exntesion for chrome: 
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

2. install redux-devtools-extension: to config

- yarn add redux-devtools-extension --dev
https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm

3. continue open store.js file:

- import { composeWithDevTools } from 'redux-devtools-extension'

- add it into "createStore" function 

## Connect redux with react together

1. Go to Todos feature: src/features/Todo.js
2. import { connect } from 'react-redux';
3. create an variable mapStateToProps.
- use to get state from store of redux.
- always return object.
4. create an variable mapDispatchTo Props
- use to dispatch an action in redux.
- always return object.
- import action into the component.
5. use "connect" function (high order function) to connect redux & react.

- always reveive 2 params mapStateToProps & mapDispatchToProps.
- If one of them doesn't have/ Please enter null.