# HololiveCardApp

HololiveCardApp is a React Native project built with TypeScript. The goal of the
application is to experiment with mobile interfaces for browsing and managing
Hololive themed trading cards. The project was generated using the
`@react-native-community/cli` tool and follows the standard React Native project
structure.

## Prerequisites

- **Node.js** 18 or later
- **npm** or **Yarn** for managing packages
- **Android Studio** or an Android device for Android builds
- **Xcode** with Ruby and Bundler for installing CocoaPods when building for iOS

Follow the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup)
to configure your system.

## Setup

1. Install JavaScript dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

2. Start the Metro bundler:

   ```sh
   npm start
   # or
   yarn start
   ```

3. Build and run the application:

   - **Android**

     ```sh
     npm run android
     # or
     yarn android
     ```

   - **iOS** (after installing CocoaPods dependencies)

     ```sh
     bundle install
     bundle exec pod install
     npm run ios
     # or
     yarn ios
     ```

## Development Guidelines

- Source code is written in TypeScript and linted with ESLint. Run
  `npm run lint` (or `yarn lint`) before committing code.
- Code formatting is handled by Prettier (configuration in `.prettierrc.js`).
- Keep changes small and well described in commit messages.

## Running Tests

Unit tests use [Jest](https://jestjs.io/). Execute the full test suite with:

```sh
npm test
# or
yarn test
```

Test files live in the `__tests__` directory and follow the `*.test.tsx` naming
convention.

---

With the prerequisites installed, you can run the app on a simulator or device
using the commands above. Feel free to modify `App.tsx` and use this project as a
starting point for your own Hololive trading card ideas.

## API Server

This repository now includes a lightweight Express server in `hololive-api`.
Start it in development mode with:

```sh
cd hololive-api
npm install
npm run dev
```

The API exposes tournament data and statistics used by the mobile app.
