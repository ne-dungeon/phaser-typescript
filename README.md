# Phaser 3 Typescript Project Template

This is a basic template to start a Phaser 3 game using Typescript. It is heavily based on the official [Phaser 3 Project Template](https://github.com/photonstorm/phaser3-project-template) repository, with the addition of Typescript transpilation.

The template includes Jest as a testing library, and the Typescript version of StandardJS for code formatting and linting. It also uses Babel and Webpack to build code and enable hot reloading.

## Requirements

Node.js is required to install dependencies and run scripts. This template was created using Node v17.4.0 and npm v8.14.0.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies. |
| `npm start` | Build project and open the Express server to run it. |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc.). |
| `npx test` | Runs the Jest test library with the default configuration. |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Customizing the Template

### Babel

You can write in Typescript and Babel will transpile it to a version of JavaScript that you want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

```json
"browsers": [
  ">0.25%",
  "not ie 11",
  "not op_mini all"
]
```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json`.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/bundle.min.js`, along with any other assets your project depends on.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you will be able to open `http://mycoolserver.com/index.html` and play your game.
