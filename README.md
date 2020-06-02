<h1 align="center">
  <img src="" alt="" /> 24G Video Player
    <img src="" alt="" />
</h1>
<h4 align="center">
 A  micro-website video player created with the Vue.js CLI and framework.
</h4>

<h5 align="center"> Live Site:
  <a href="">https://24g-video-player.now.sh</a>
</h5>

## Overview

### 💪 Challenge

Build a fully responsive micro-website to play videos using the Vue.js CLI and framework. Store all likes, comments, and views in a database. Create a REST API using ExpressJS to serve that data. Design according to the following desktop and mobile layouts:

![Desktop Layout](https://github.com/CodeMeKathy/24G-Video-Player/blob/master/client/src/assets/comp_desktop.png?raw=true 'Desktop Layout')

![Mobile Layout](https://github.com/CodeMeKathy/24G-Video-Player/blob/master/client/src/assets/comp_mobile.png?raw=true 'Mobile Layout')

### 💻 Tech Stack

- _Frontend:_ A video player created with the [Vue CLI and framework](https://cli.vuejs.org), [BootstrapVue](https://bootstrap-vue.org), [Node Sass](https://www.npmjs.com/package/node-sass).
- _Backend:_ A RESTFUL API built with [NodeJS](https://nodejs.org/), [Express](https://www.express.com/), [MongoDB](https://www.mongodb.com/), and [Mongoose](https://mongoosejs.com/).
- _Deployment:_
  - _Frontend:_ [24G Video Player](https://24g-video-player.now.sh) deployed via Vercel.
  - _Backend:_ [24G Video Server](kl-24g-player-server.herokuapp.com/) deployed via Heroku.

## ⏳ Project Status

The minimal viable product (MVP) requirements have been accomplished. Additional development is underway.

## 🚀 Getting Started

### Prerequisites 📋

This project uses [NodeJS](http://nodejs.org), [NPM](https://npmjs.com) and [MongDB](https://www.mongodb.com/). To confirm if locally installed, run these commands in the terminal: `node --version` or `npm --version` for NodeJS and `mongo --version` for MongoDB. If not locally installed, you will need to install these via [Homebrew](https://brew.sh/) (recommended) or check the links below for alternative download and install methods.

#### Homebrew Install

- Install Homebrew via the link above (if you do not have it already)
- Run `brew install node` to install both NodeJS and NPM
- Run `brew tap mongodb/brew` to add MongoDB's custom 'tap' ([More Info](https://github.com/mongodb/homebrew-brew))
- Run `brew install mongo-community-shell` for the latest version of the Mongo CLI **only** or run `brew install mongodb-community` to install the latest MongoDB Community Server plus command line tools

#### Homebrew Alternative Install

- [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [MongoDB](https://www.mongodb.com/download-center/shell)

### 🔌 Dependencies

- [Vue CLI](https://cli.vuejs.org)
- [Bootstrap](https://getbootstrap.com)
- [BootstrapVue](https://bootstrap-vue.org)
- [Vue2 Timeago](https://github.com/runkids/vue2-timeago)
- [Node Sass](https://www.npmjs.com/package/node-sass)
- [Sass Loader](https://www.npmjs.com/package/sass-loader)
- [Express](https://www.npmjs.com/package/express)
- [CORS](https://www.npmjs.com/package/cors)
- [Helmet](https://www.npmjs.com/package/helmet)
- [Mongoose](https://mongoosejs.com/)

### 💾 Project Setup & Installation

1. Open your terminal and in the desired directory, run `git clone https://github.com/CodeMeKathy/24G-Video-Player.git` to clone this project repository to the local machine.
2. Once cloned, in the terminal run `cd 24G-Video-Player/client` and `npm install` inside the `client` directory. You will have to do this again for the `server` directory.
3. From the `client` directory, run `cd ../24G-Video-Player/server` and run `npm install`.
4. In the `24G-Video-Player/server` directory in your terminal, run `node db/seed` to create and seed the database.
5. In `24G-Video-Player/server` run `mongo` in the terminal to start the MongoDB CLI.
6. Once the Mongo shell is initialized, run `show dbs` to double-check that your local database was created correctly. One of the results should be `24g-video-player`.
7. Once all developer dependencies are downloaded, you are ready to get started.
   - In `24G-Video-Player/client` run `npm run serve` to start the Vue.js dev server.
   - In `24G-Video-Player/server` run `npm run start` to start the NodeJS dev server.
8. Visit locally running copy of the Vue.js project at `http://localhost:8080` (or as indicated in the terminal).

## 🛠️ Technologies Used

- [Vercel](https://vercel.com)
- [Heroku](https://www.heroku.com/)
- [Real Favicon Generator](https://realfavicongenerator.net)
- [Draw.io](https://draw.io)
- [Insomnia](https://insomnia.rest)

## 📂 Database Schema

![Mobile Layouts](https://github.com/CodeMeKathy/24G-Video-Player/blob/master/client/src/assets/24G%20Video%20Player%20DB%20Schema.png?raw=true 'Database Video Schema')

## 📄 License

The code in this project is licensed under the [MIT License](LICENSE.md) © 2020 Kathy Lambert.
