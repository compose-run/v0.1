# ComposeJS

_A whole database without leaving React_

### useRealtimeState

Add a `name` to `useState` to get a persistent, realtime state:

![](https://user-images.githubusercontent.com/2288939/139447267-76a76bf7-f964-4f80-9c44-dd008e74fd8f.png)

[![Edit ComposeJS useRealtimeState Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/composejs-userealtimestate-template-9q3vb?fontsize=14&hidenavigation=1&theme=dark)

### useRealtimeReducer

Add a `name` to `useReducer` to get a persistent, realtime state:

![](https://user-images.githubusercontent.com/2288939/139447266-d986daa8-2c49-4a9d-aed9-283abbf89864.png)

Actions are dispatched to our servers. We run your reducer, and efficiently send back the updated state via diffs.

[![Edit ComposeJS Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/pensive-river-0hybn?fontsize=14&hidenavigation=1&theme=dark)

## A whole database without leaving React

> Prerequisites: If you're not familiar with the `useReducer` React hook, we recommend reading first about the simpler [`useState` hook](https://reactjs.org/docs/hooks-state.html) and then the [`useReducer` hook](https://reactjs.org/docs/hooks-reference.html#usereducer).

We try as much as possible to keep you in the flow of building your React frontend. There's no separate tool you have to use, new abstractions to learn, or deploy configurations you have to write. We want it to feel like you're _programming your entire backend inside React hooks!_

The main downside is that it currently doesn't scale particularly well. In other words, don't use this if you're building something real that needs to scale. We hope to solve this problem shortly, but we're focused on getting the DX right with small-data applications first. Think: hackathon or side project.

ComposeJS is currently a small, open-source wrapper around Firebase. This provides many services built-in, such as Authentication, Storage, Cloud Functions and more from the Firebase and Google Cloud platforms. Why use ComposeJS over Firebase? ComposeJS wraps Firebase in functional and reactive abstractions that better fit the React model. Eventually we plan to move off Firebase to our own hosted offering.

## Install

**Beware: Compose is not ready for public use.**

The quickest way to get started is to fork this [CodeSandbox template](https://codesandbox.io/s/pensive-river-0hybn?fontsize=14&hidenavigation=1&theme=dark).

If you want to install it yourself:

1. Currently, there is no proper NPM package, so simply to copy the [compose.ts](https://github.com/compose-run/realworld/blob/main/src/services/compose.ts) somewhere into your project.
2. `npm install --save firebase` (and `react` and `typescript` if you haven't already)

That's it! If you want to use your own personal Firebase account, there are two extra steps:

1. Replace [our Firebase credentials](https://github.com/compose-run/realworld/blob/main/src/services/compose.ts#L45-L53) with your own from the Firebase Console.
2. Add the following Security Rules to your Firestore database to protect the `uid` field on actions:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true
      allow delete: if false
    }

    match /behaviors/{document=**} {
      allow create: if true
    }

    match /behaviors-reducers/{document=**} {
      allow create: if true
    }

    match /streams/{name}/values/{value} {
      allow create: if !("uid" in request.resource.data) || (request.auth != null && request.auth.uid == request.resource.data.uid)
    }
  }
}
```

## Authentication

Authentication is handled by Firebase. They have email & password, magic link, Facebook, Twitter, and many other authentication methods.

You can read more about web authentication for Firebase here: https://firebase.google.com/docs/auth/web/start

### useFirebaseUser(): [User](https://firebase.google.com/docs/reference/js/auth.user?hl=en)

Once you authenticate via one of Firebase's methods, you can access the currently-logged-in Firebase user with `useFirebaseUser` hook.

Most importantly, this gives you access to the logged-in user's id `uid`, which is the basis of **Authorization and Access Control**, described below.

## Authorization & Access Control

Once you have a user logged in, you can add the `uid` (user id) field to any action you dispatch to a reducer. Then, in the reducer function, you can trust that the author of that action has that `uid`.

In other words, we enforce (via Firebase Security Rules) that the `uid` field on all incoming actions corresponds to that of the user dispatching the action. This can't be forged.

So any other security validation (enforcing uniqueness, enforcing ownership of resources) happens _inside_ the reducer. This means that you don't have to mess with Firebase's Security Rules: you can handle all that logic in your `useRealtimeReducer` hook.

### Example

```ts
interface Message {
  body: string;
  createdAt: number;
  uid: UId;
  id: Id;
}

interface NewMessage {
  type: 'NewMessage';
  newMessage: Message;
  uid: UId;
}

interface DeleteMessage{
  type: "DeleteMessage";
  uid: UId;
  id: string;
}

type MessageAction = NewMessage | DeleteMessage;

type MessageError = string;

const useMessages = () => useRealtimeReducer<Message[], MessageAction, MessageError>({
  name: 'messages',
  initialValue: [],
  reducer: (messages, action, resolve) => {
    if (action.type === 'NewMessage') {
      if (action.newMessage.body.length < 240) {
        if (action.uid == action.newMessage.uid) {
          return [...messages, action.newMessage];
        } else {
          resolve("User is not authorized to submit this message")
          return messages
        }
      } else {
        resolve('Message too long');
        return messages;
      }
    } else if (action.type === "DeleteMessage") {
      const message = messages.find(({id}) => action.id === id)
      if (!message) {
        resolve('Message not found to delete')
        return messages
      } else if (message.uid !== action.uid) {
        resolve('User is not authorized to delete this message')
        return messages
      else {
        return messages.filter(({id}) => action.id !== id)
      }
    }
  }
});
```

## Private data - _coming soon_

Currently all data in ComposeJS is public, but we are working on a way to add this capability.

## API

### `useRealtimeReducer`

This is the core ComposeJS function. It is a realtime and persistent version of the built-in `useReducer` React hook. Like `useReducer` it takes an `initialValue` and a `reducer` (as keyword arguments), but it also accepts a `name` to uniquely identify the persistent state.

```ts
function useRealtimeReducer<State, Action, Message>({
  name,
  initialValue,
  reducer,
}: {
  name: string;
  initialValue: State | Promise<State>;
  reducer: (state: State, action: Action, resolve?: (message: Message) => void) => State;
}): [State | undefined, (action: Action) => Promise<Message>];
```

It returns an array. The first value represents the realtime, persistent state. The second is a function which allows you to dispatch values ("actions" in Redux terminology) to the reducer.

Unlike the local hook, `useRealtimeReducer` dispatches all actions to a server which timestamps them and runs your reducer function. Any state changes are beamed back to each client node efficiently as diffs.

In development mode, the reducer runs locally every user's browser. When you build your application, ComposeJS automatically pulls out your reducer functions into separate files to be deployed as Google Cloud Function or AWS Lambda Functions.

`useRealtimeReducer` provides a way for the reducer to communicate directly back to the action dispatcher. This can useful when the frontend waits on a reducer to confirm or reject an action. For example, when a user picks a name that needs to be unique, your app can `await dispatcher(someAction)` for success or rejection message. You can send these messages back to dispatchers by having your reducer accept a third argument: a `resolve` function. In the reducer, you can `resolve(someMessage)` which will resolve the Promise for the dispatcher of that action.

It is considered good practice to make reducers deterministic. When you use `Date.now` or `Math.random()`, do it on the client and dispatch those non-deterministic values to the reducer.

#### Example Usage

```ts
interface Message {
  body: string;
  createdAt: number;
}

interface NewMessage {
  type: 'NewMessage';
  newMessage: Message;
}

type MessageAction = NewMessage;

type MessageError = string;

const useMessages = useRealtimeReducer<Message[], MessageAction, MessageError>({
  name: 'messages',
  initialValue: [],
  reducer: (oldValue, action, resolve) => {
    if (action.type === 'NewMessage') {
      if (action.newMessage.body.length < 240) {
        return [...oldValue, action.newMessage];
      } else {
        resolve('Message too long');
        return oldValue;
      }
    }
  },
});
```

### `getRealtimeState<A>(name: string): Promise<State | null>`

`getRealtimeState` accepts a realtime state name and returns a Promise with it's value.

It can be useful to spy the current value of some state:

```ts
getRealtimeState('my-state-1').then(console.log);
```

## Folder structure

This codebase was created to demonstrate a fully fledged fullstack application built with React, Typescript, and ComposeJS.

[Compose Realworld Live Demo](https://compose-run.github.io/realworld/#/)

This repo was forked from [ts-redux-react-realworld-example-app](https://github.com/angelguzmaning/ts-redux-react-realworld-example-app) by [@angelguzmaning](https://github.com/angelguzmaning), which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The root of the application is the `src/components/App` component. The App component uses react-router's HashRouter to display the different pages. Each page is represented by a [function component](https://reactjs.org/docs/components-and-props.html).

This application is built following (as much as practicable) functional programming principles:

- Immutable Data
- No classes
- No let or var
- No side effects

The code avoids runtime type-related errors by using Typescript and decoders for data coming from the API.

This project uses prettier and eslint to enforce a consistent code syntax.

- `src/components` Contains all the functional components.
- `src/components/Pages` Contains the components used by the router as pages.
- `src/state` Contains redux related code.
- `src/services` Contains the code that interacts with external systems (ComposeJS).
- `src/types` Contains type definitions alongside the code related to those types.
- `src/config` Contains configuration files.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

Note: This project will run the app even if linting fails.

### `npm run lint`

Enforces the prettier and eslint rules for this project. This is what is run on the pre-commit hook.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run deploy`

This project is configured to be deployed to Github Pages, which works because the routing is hash-based and ComposeJS is fully serverless.
