# Project 4 Konjo Communities Node/Express Backend App

Welcome to Konjo Communities where you can create, join, meet, grow, and comment about communities. This is the react web version of the project built using react.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites & Installation

What things you need to install the software and how to install them:

-Mac Computer
-NPM package manager
-Nodejs
-MongoDB

Make sure you are mongodb is running using the following command.

```
mongod
```

Clone this repository and cd intro the konjoproject4 directory to install the dependencies.

```
npm install
```

To seed the database runn the following command.

```
node db/seed.js
```

To start the app run the following command.

```
nodemon
```

Navigate to http://localhost:4000/community to view the JSON data and ensure the database and node app are operational.

## Deployment

This app was deployed to heroku: https://konjomeet.herokuapp.com/community

## Built With

- [NodeJS](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js
- [MongoDB](https://www.mongodb.com/) - The most popular database for modern apps
- [JWT](https://jwt.io/) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

## Contributing

If you would like to contribute to this project, please feel free to submit a pull request!

## Authors

- **Konjo - Wesley Scholl** - _Initial work_ - [KonjoInfinity](https://github.com/konjoinfinity)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thank you to the WDI/SEI 28 cohort and instructors.
- Inspiration - Improving project 2 with more functionality.
